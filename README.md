# Adedayo Adelumola — 3D Portfolio

Static site (no build step): three.js (3D background), anime.js (animations), Lenis (smooth scroll).

- Edit content (folders, videos, experience, tools) in `js/data.js`.
- Photos live in `assets/img/` (web-sized). Originals in `assets/img/src/` are git-ignored.
- Run locally: `python -m http.server 5180` then open http://localhost:5180

## Deploy on Netlify
New site → Import from GitHub → pick this repo. No build command; publish directory: `/` (repo root).
