# Phoney Casino: product site

Static website for the Phoney Casino app, served by GitHub Pages at https://utoappia.github.io/Phoney-Casino_Product-Page/
(the store listings link to it). Pages publishes the root of `main` (Settings › Pages ›
Deploy from a branch), so every push to `main` updates it. No build step: plain HTML, CSS and JavaScript.

| Page | Path |
| --- | --- |
| Home | `/` |
| Privacy policy | `/privacy/` |
| Support | `/support/` |
| AdMob authorized sellers | `/app-ads.txt` (must be served at the root of the developer website listed in the stores) |

## Languages

English, 繁體中文 (`zh-Hant`), 简体中文 (`zh-Hans`). The page follows the browser's languages (zh-TW / zh-HK / zh-MO /
zh-Hant → 繁體中文, other zh → 简体中文) and falls back to English. `?lang=zh-Hant` forces a language; the menu in the
header sets it.

## Editing

- **Texts:** `assets/content.js` (`window.SITE`). Every text has all three languages.
- **Store links:** set `SITE.appStore` / `SITE.playStore` once the app is live; until then the buttons say "Coming soon".
- **Screenshots:** `assets/shots/<lang>/<id>.jpg`, 600 px wide copies of the iPhone 6.9" store screenshots
  (`build/store-screenshots/<lang>/iphone-6.9/` in the app repo).
- **Rendering:** `assets/app.js` fills each page shell (`<body data-page="…">`). **Look:** `assets/style.css`.
- **Privacy policy changes:** edit `SITE.privacy` in all three languages and update `SITE.privacy.updated`.

Player-visible text follows the app's rules: virtual coins only (no purchases, no cash-out), adults 18+, and no real
casino names or brands.

Preview locally: `python3 -m http.server` in this folder, then open http://localhost:8000.
