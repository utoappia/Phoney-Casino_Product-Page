// Fills each page shell (<body data-page="home|privacy|support" data-root="../">) from window.SITE, in the visitor's
// language: ?lang=… if given, else the browser's languages (zh-TW / zh-HK / zh-MO / zh-Hant → 繁體中文, other zh →
// 简体中文), else English.
(function () {
  const S = window.SITE;
  const LANGS = Object.keys(S.langNames);
  const body = document.body;
  const page = body.dataset.page;
  const root = body.dataset.root || '';

  function pickLang() {
    const asked = new URLSearchParams(location.search).get('lang');
    if (LANGS.includes(asked)) return asked;
    for (const l of navigator.languages || [navigator.language || 'en']) {
      const low = l.toLowerCase();
      if (low.startsWith('zh')) return /hant|tw|hk|mo/.test(low) ? 'zh-Hant' : 'zh-Hans';
      if (low.startsWith('en')) return 'en';
    }
    return 'en';
  }
  const lang = pickLang();
  document.documentElement.lang = lang;
  const t = (o) => (o && (o[lang] ?? o.en)) || '';
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  // Plain text with its URLs and the email address made into links.
  const linkify = (s) =>
    esc(s)
      .replace(/https?:\/\/[^\s<]+[^\s<.,)]/g, (u) => `<a href="${u}" rel="noopener">${u}</a>`)
      .replace(/[\w.+-]+@[\w-]+\.[\w.]+[a-z]/gi, (m) => `<a href="mailto:${m}">${m}</a>`);
  const withLang = (href) => (lang === 'en' ? href : `${href}?lang=${lang}`);

  const nav = [
    ['home', '', S.ui.home],
    ['support', 'support/', S.ui.support],
    ['privacy', 'privacy/', S.ui.privacy],
  ];
  const header = `<header class="top">
  <a class="brand" href="${withLang(root || './')}"><img src="${root}assets/icon.png" alt="" width="36" height="36"><span>${esc(t(S.ui.name))}</span></a>
  <nav>${nav
    .filter(([id]) => id !== 'home')
    .map(([id, href, label]) => `<a href="${withLang(root + href)}"${id === page ? ' aria-current="page"' : ''}>${esc(t(label))}</a>`)
    .join('')}
  <label class="lang"><span class="sr">${esc(t(S.ui.language))}</span><select id="lang">${LANGS.map(
    (l) => `<option value="${l}"${l === lang ? ' selected' : ''}>${S.langNames[l]}</option>`,
  ).join('')}</select></label></nav>
</header>`;

  const footer = `<footer class="foot">
  <p class="fine">${esc(t(S.ui.fine))}</p>
  <p>${nav.map(([, href, label]) => `<a href="${withLang(root + href || './')}">${esc(t(label))}</a>`).join(' · ')} · <a href="mailto:${S.email}">${S.email}</a></p>
  <p class="by">© ${new Date().getFullYear()} Utoappia · ${esc(t(S.ui.by))}</p>
</footer>`;

  const storeButton = (store, url) => {
    const icon =
      store === 'appStore'
        ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M16.4 12.6c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8s2 .8 3.3.8c1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.8-1-2.8-4.1zM14 5.2c.7-.8 1.2-2 1-3.2-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3.1 1.1.1 2.2-.6 2.9-1.4z"/></svg>'
        : '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3.6 2.3c-.3.3-.4.7-.4 1.2v17c0 .5.1.9.4 1.2l9.5-9.7-9.5-9.7zm10.6 10.8 2.9 3-11.3 6.5c-.5.3-1 .3-1.4.1l9.8-9.6zm4.3-4.3 2.6 1.5c.9.5.9 1.8 0 2.3l-2.7 1.6-3.1-3.2 3.2-2.2zM5.8 1.3l11.3 6.5-2.9 3-9.8-9.6c.4-.2.9-.2 1.4.1z"/></svg>';
    const top = url ? t(S.ui.downloadOn) : t(S.ui.comingSoon);
    const inner = `${icon}<span><small>${esc(top)}</small><b>${esc(t(S.ui[store]))}</b></span>`;
    return url
      ? `<a class="store" href="${url}" rel="noopener">${inner}</a>`
      : `<span class="store soon" aria-disabled="true">${inner}</span>`;
  };

  function home() {
    const shots = S.features
      .map(
        (f, i) => `<figure class="shot">
  <img src="assets/shots/${lang}/${f.id}.jpg" alt="${esc(t(f.title))}" width="600" height="1304" ${i > 1 ? 'loading="lazy"' : ''}>
</figure>`,
      )
      .join('');
    const features = S.features
      .slice(1)
      .map((f) => `<li><h3>${esc(t(f.title))}</h3><p>${esc(t(f.text))}</p></li>`)
      .join('');
    return `<main>
<section class="hero">
  <div class="hero-bg" aria-hidden="true"></div>
  <img class="cut c1" src="assets/art/roulette.webp" alt="" aria-hidden="true">
  <img class="cut c2" src="assets/art/blackjack.webp" alt="" aria-hidden="true">
  <img class="cut c3" src="assets/art/seven.webp" alt="" aria-hidden="true">
  <img class="cut c4" src="assets/art/cherry.webp" alt="" aria-hidden="true">
  <div class="hero-text">
    <img class="app-icon" src="assets/icon.png" alt="" width="128" height="128">
    <h1>${esc(t(S.ui.name))}</h1>
    <p class="tagline">${esc(t(S.ui.tagline))}</p>
    <p class="intro">${esc(t(S.ui.intro))}</p>
    <div class="stores">${storeButton('appStore', S.appStore)}${storeButton('playStore', S.playStore)}</div>
    <p class="badge">18+</p>
  </div>
</section>
<section class="gallery" aria-label="Screenshots"><div class="strip">${shots}</div></section>
<section class="features"><h2>${esc(t(S.ui.features))}</h2><ul>${features}</ul></section>
</main>`;
  }

  function doc(d, updated) {
    const sections = (d.sections[lang] || d.sections.en)
      .map(
        (s) => `<section>${s.h ? `<h2>${esc(s.h)}</h2>` : ''}${s.p.map((p) => `<p>${linkify(p)}</p>`).join('')}${
          s.link ? `<p><a href="${withLang(root + s.link)}">${esc(t(S.ui.privacy))} →</a></p>` : ''
        }</section>`,
      )
      .join('');
    return `<main class="doc"><h1>${esc(t(d.title))}</h1>${
      updated ? `<p class="updated">${esc(t(S.ui.updated))}: ${esc(t(updated))}</p>` : ''
    }${sections}</main>`;
  }

  const main = page === 'privacy' ? doc(S.privacy, S.privacy.updated) : page === 'support' ? doc(S.support) : home();
  const title = page === 'home' ? `${t(S.ui.name)}: ${t(S.ui.tagline)}` : `${t(S[page].title)} · ${t(S.ui.name)}`;
  document.title = title;
  body.innerHTML = header + main + footer;

  document.getElementById('lang').addEventListener('change', (e) => {
    const url = new URL(location.href);
    url.searchParams.set('lang', e.target.value);
    location.href = url.toString();
  });
})();
