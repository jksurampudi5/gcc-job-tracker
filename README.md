# GCC Scout

A no-build quick-apply dashboard for Hyderabad data-engineering roles. It publishes public job metadata only; the private resume stays outside this repository.

## Run locally

From this folder, run:

```bash
python3 -m http.server 4173
```

Then open [http://localhost:4173](http://localhost:4173).

The dashboard is intentionally static so it can be opened immediately without installing dependencies. Role links prefer the employer's direct page and fall back to its official careers hub when a listing becomes unavailable.

## Daily link refresh

GitHub Actions runs `scripts/check_jobs.py` every day at 09:00 IST. It checks each public application URL, detects common expired/error responses, and switches to the configured official fallback when possible. The Pages workflow republishes the dashboard after changes.

The workflow automates discovery/link checking, not application submission. Employer forms can require account login, OTPs, CAPTCHA, declarations, and role-specific answers; those should be reviewed and submitted from the employer's page.

## GitHub Pages

After the first successful Pages workflow, the dashboard URL will be:

<https://jksurampudi5.github.io/gcc-job-tracker/>
