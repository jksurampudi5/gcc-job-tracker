#!/usr/bin/env python3
"""Check public application URLs and switch to official fallbacks when needed."""

import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
DATA_FILE = ROOT / "data" / "jobs.json"
USER_AGENT = "GCC-Scout-Link-Checker/1.0 (+https://github.com/jksurampudi5/gcc-job-tracker)"
EXPIRY_PATTERNS = (
    r"job\s+(?:has\s+)?expired",
    r"position\s+(?:has\s+)?been\s+filled",
    r"no\s+longer\s+accepting\s+applications",
    r"this\s+vacancy\s+has\s+now\s+expired",
    r"application\s+error",
    r"502\s+bad\s+gateway",
)


def check_url(url: str) -> tuple[bool, int | None, str, str]:
    request = Request(url, headers={"User-Agent": USER_AGENT, "Accept": "text/html,application/xhtml+xml"})
    try:
        with urlopen(request, timeout=25) as response:
            final_url = response.geturl()
            status = response.status
            content = response.read(300_000).decode("utf-8", errors="ignore").lower()
        expired = any(re.search(pattern, content) for pattern in EXPIRY_PATTERNS)
        if status >= 400:
            return False, status, final_url, f"HTTP {status}"
        if expired:
            return False, status, final_url, "expiry or application error text detected"
        return True, status, final_url, "reachable"
    except HTTPError as error:
        # Some employer pages reject automated requests while remaining usable
        # in a normal browser. Keep the direct link and label it accordingly.
        if error.code in (401, 403, 429):
            return True, error.code, error.geturl(), f"browser verification may be required (HTTP {error.code})"
        return False, error.code, error.geturl(), f"HTTP {error.code}"
    except (TimeoutError, URLError, OSError) as error:
        return False, None, url, type(error).__name__


def main() -> int:
    jobs = json.loads(DATA_FILE.read_text())
    now = datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")
    failures = 0

    for job in jobs:
        preferred = job.get("preferredUrl") or job.get("applicationUrl")
        fallback = job.get("fallbackUrl")
        ok, status, final_url, note = check_url(preferred)
        selected_url = preferred
        selected_note = note
        selected_final_url = final_url
        if not ok and fallback:
            fallback_ok, fallback_status, fallback_final_url, fallback_note = check_url(fallback)
            if fallback_ok:
                ok, status, selected_final_url, selected_note = True, fallback_status, fallback_final_url, f"preferred unavailable; official fallback reachable ({fallback_note})"
                selected_url = fallback

        job["applicationUrl"] = selected_url
        job["linkStatus"] = "verified" if ok else "needs-review"
        job["linkStatusLabel"] = "Browser check" if "browser verification" in selected_note else ("Checked today" if ok else "Needs review")
        job["lastCheckedAt"] = now
        job["httpStatus"] = status
        job["finalUrl"] = selected_final_url
        job["linkCheckNote"] = selected_note
        if not ok:
            failures += 1
            print(f"needs-review: {job['company']} — {job['title']} — {selected_note}")
        else:
            print(f"ok: {job['company']} — {job['title']} — {selected_url}")

    DATA_FILE.write_text(json.dumps(jobs, indent=2, ensure_ascii=False) + "\n")
    print(f"Checked {len(jobs)} jobs; {failures} need review.")
    # A failed link should not fail the workflow: the fallback or review state is committed for visibility.
    return 0


if __name__ == "__main__":
    sys.exit(main())
