# GCC Scout

A no-build quick-apply dashboard for Hyderabad data-engineering roles (3+ years experience). It surfaces active job openings with verified direct application links.

## Run locally

From this folder, run:

```bash
python3 -m http.server 4173
```

Then open [http://localhost:4173](http://localhost:4173).

## Refresh Schedule (Every 3 Hours)

GitHub Actions runs `scripts/check_jobs.py` every 3 hours (`cron: "0 */3 * * *"`).

The checker:
- Verifies that each employer or ATS URL is reachable (HTTP 200).
- Validates the presence of an active "Apply now" button / form.
- Strictly flags and removes expired vacancies, filled positions, or generic category/search results pages.
- Commits updated verification timestamps and republishes GitHub Pages automatically.

## GitHub Pages

The dashboard is deployed at:

<https://jksurampudi5.github.io/gcc-job-tracker/>
