/* ==========================================================================
   Vantage Lite — everything the page does.

   Nothing is fetched and nothing is built: this file reads js/config.js,
   js/offer.js and js/i18n.js and writes the page. Open index.html from the
   file system and it works.

   Reading order
     1. small helpers            — $, el, money, esc
     2. language and theme       — what the two controls in the header do
     3. render*()                — one function per section
     4. chart()                  — the line chart, drawn as plain SVG
   ========================================================================== */

/* ---- which locale formats numbers and dates for which language --------
   Add a line here whenever you add a language to js/i18n.js, or that
   language will print the price in the wrong shape. */
const LOCALES = { en: 'en-GB', pl: 'pl-PL', uk: 'uk-UA' };

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

function el(tag, cls, html) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
}

/* Text that comes from config goes through here before it is ever written
   as HTML. The page builds markup with innerHTML in places, and a stray <
   in a client name should not be able to open a tag. */
function esc(s) {
  return String(s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

let LANG = 'en';

/* ---- words ----------------------------------------------------------- */
function t(key, vars) {
  let s = (I18N[LANG] && I18N[LANG][key]) ?? I18N.en[key] ?? key;
  if (vars) for (const k in vars) s = s.split('{' + k + '}').join(vars[k]);
  return s;
}

/* ---- money ----------------------------------------------------------
   One number in js/offer.js, written the way each language writes it. */
function money(n) {
  return new Intl.NumberFormat(LOCALES[LANG] || 'en-GB', {
    style: 'currency', currency: CFG.currency, maximumFractionDigits: 0
  }).format(n);
}
function num(n) {
  return new Intl.NumberFormat(LOCALES[LANG] || 'en-GB').format(n);
}

/* ---- translate everything carrying data-i18n ------------------------- */
function applyI18n() {
  const vars = {
    name: CFG.name,
    city: CFG.city[LANG] || CFG.city.en,
    y: CFG.since
  };
  $$('[data-i18n]').forEach(n => { n.textContent = t(n.dataset.i18n, vars); });
  $$('[data-i18n-attr]').forEach(n => {
    const [attr, key] = n.dataset.i18nAttr.split(':');
    n.setAttribute(attr, t(key, vars));
  });

  document.documentElement.lang = LANG;
  document.title = t('doc.title', vars);
  const desc = $('meta[name=description]');
  if (desc) desc.setAttribute('content', t('doc.desc', vars));
}

/* ---- the two controls in the header ---------------------------------- */
function setLang(code) {
  LANG = LANGS.includes(code) ? code : 'en';
  try { localStorage.setItem('vantage-lang', LANG); } catch (e) { /* private mode */ }
  $('#lang').value = LANG;
  renderAll();
}

function setTheme(mode) {
  document.documentElement.dataset.theme = mode;
  $('#theme').setAttribute('aria-pressed', mode === 'light' ? 'true' : 'false');
  try { localStorage.setItem('vantage-theme', mode); } catch (e) { /* private mode */ }
}

/* ==========================================================================
   Sections
   ========================================================================== */

function renderHeader() {
  $$('[data-name]').forEach(n => { n.textContent = CFG.name; });
  const mark = $('[data-mark]');
  if (mark) mark.textContent = CFG.initials || CFG.name.slice(0, 1);
  const y = $('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
}

function renderFigures() {
  const box = $('[data-figs]');
  box.innerHTML = '';
  CFG.figures.forEach(f => {
    const li = el('li', 'fig');
    li.append(el('b', null, esc((f.prefix || '') + f.value)));
    li.append(el('span', null, esc(t(f.key))));
    box.append(li);
  });
}

function renderPlatforms() {
  const ul = $('[data-platforms]');
  ul.innerHTML = '';
  CFG.platforms.forEach(p => ul.append(el('li', null, esc(p))));
}

/* ---- results --------------------------------------------------------
   One chart per case, one series each. A single line needs no legend:
   the card's heading says what the number is. */

function fmtVal(v, unit) {
  if (unit === 'x') return num(Math.round(v * 10) / 10) + '×';
  if (unit === 'money') return money(v);
  return num(v);
}

function chart(c) {
  const W = 320, H = 112, P = { t: 14, r: 14, b: 20, l: 14 };
  const vals = c.series;
  const lo = Math.min(...vals), hi = Math.max(...vals);
  /* a flat 18% of the range as breathing room, so the line never touches
     the frame and a small wobble does not look like a cliff */
  const pad = (hi - lo) * 0.18 || 1;
  const min = lo - pad, max = hi + pad;
  const x = i => P.l + (W - P.l - P.r) * (i / (vals.length - 1));
  const y = v => P.t + (H - P.t - P.b) * (1 - (v - min) / (max - min));

  const line = vals.map((v, i) => (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(v).toFixed(1)).join(' ');
  const area = line + ` L${x(vals.length - 1).toFixed(1)} ${H - P.b} L${x(0).toFixed(1)} ${H - P.b} Z`;

  const grid = [0.5, 1].map(k => {
    const gy = (P.t + (H - P.t - P.b) * k).toFixed(1);
    return `<line class="g" x1="${P.l}" y1="${gy}" x2="${W - P.r}" y2="${gy}"/>`;
  }).join('');

  /* one hit area per month, wider than the dot — a 4px target is not a
     target on a phone */
  const hits = vals.map((v, i) => {
    const w = (W - P.l - P.r) / (vals.length - 1);
    return `<rect class="hit" x="${(x(i) - w / 2).toFixed(1)}" y="0" width="${w.toFixed(1)}" height="${H}"
             data-i="${i}" data-v="${esc(fmtVal(v, c.unit))}"
             data-m="${esc(t('case.month', { n: i + 1 }))}"></rect>`;
  }).join('');

  const dots = vals.map((v, i) =>
    `<circle class="d${i === vals.length - 1 ? ' last' : ''}" cx="${x(i).toFixed(1)}" cy="${y(v).toFixed(1)}" r="${i === vals.length - 1 ? 5 : 3}"/>`
  ).join('');

  return `<div class="chart-wrap">
    <svg class="chart" viewBox="0 0 ${W} ${H}" role="img"
         aria-label="${esc(t('case.chart', { metric: t(c.key + '.m1') }))}">
      ${grid}
      <path class="area" d="${area}"/>
      <path class="line" d="${line}"/>
      ${dots}
      <text class="ax" x="${P.l}" y="${H - 6}">1</text>
      <text class="ax end" x="${W - P.r}" y="${H - 6}">${vals.length}</text>
      ${hits}
    </svg>
    <div class="tip" hidden></div>
  </div>`;
}

function renderCases() {
  const box = $('[data-cases]');
  box.innerHTML = '';

  CASES.forEach(c => {
    const first = c.series[0], last = c.series[c.series.length - 1];
    const pct = Math.round(Math.abs(last - first) / first * 100);
    const better = c.lower ? last < first : last > first;
    const change = t(c.lower ? 'case.down' : 'case.up', { p: num(pct) });

    const card = el('article', 'case');
    card.innerHTML =
      `<header class="case-h">
         <h3>${esc(t(c.key))}</h3>
         <p class="sector">${esc(t(c.key + '.sector'))}</p>
       </header>
       <p class="case-what">${esc(t(c.key + '.what'))}</p>
       <p class="chart-h">${esc(t('case.chart', { metric: t(c.metrics[0].key) }))}</p>
       ${chart(c)}
       <p class="change${better ? ' good' : ''}">${esc(change)} <i>· ${esc(t('case.period'))}</i></p>
       <dl class="metrics">${c.metrics.map(m =>
         `<div><dt>${esc(t(m.key))}</dt>
            <dd><s>${esc(m.from)}</s> <b>${esc(m.to)}</b></dd></div>`).join('')}</dl>`;
    box.append(card);
  });

  /* hover and touch both land here; the tooltip follows the hit area */
  $$('.chart-wrap').forEach(wrap => {
    const tip = $('.tip', wrap);
    $$('.hit', wrap).forEach(h => {
      const show = () => {
        tip.innerHTML = `<b>${h.dataset.v}</b><span>${h.dataset.m}</span>`;
        tip.hidden = false;
        const box = wrap.getBoundingClientRect();
        const r = h.getBoundingClientRect();
        tip.style.left = Math.round(r.left - box.left + r.width / 2) + 'px';
      };
      h.addEventListener('mouseenter', show);
      h.addEventListener('touchstart', show, { passive: true });
      h.addEventListener('mouseleave', () => { tip.hidden = true; });
    });
    wrap.addEventListener('mouseleave', () => { tip.hidden = true; });
  });
}

function renderServices() {
  const ul = $('[data-services]');
  ul.innerHTML = '';
  SERVICES.forEach(s => {
    const price = t('svc.from', { p: money(s.price) }) + (s.period === 'mo' ? t('svc.mo') : '');
    const li = el('li', 'svc');
    li.innerHTML =
      `<h3>${esc(t(s.key))}</h3>
       <p>${esc(t(s.key + '.d'))}</p>
       <p class="price">${esc(price)}</p>`;
    ul.append(li);
  });
}

function renderSteps() {
  const ol = $('[data-steps]');
  ol.innerHTML = '';
  STEPS.forEach(s => {
    const li = el('li', 'step-i');
    li.innerHTML =
      `<p class="week">${esc(t('step.week', { w: s.week }))}</p>
       <h3>${esc(t(s.key))}</h3>
       <p>${esc(t(s.key + '.d'))}</p>`;
    ol.append(li);
  });
}

function renderAbout() {
  const shot = $('[data-photo]');
  /* The photo is layered over the drawn placeholder, so a missing file
     leaves a designed panel rather than an empty frame. */
  shot.style.backgroundImage = CFG.photo ? `url('${CFG.photo}'), var(--art)` : 'var(--art)';
  $('[data-since]').textContent = t('about.since', { y: CFG.since });

  const ul = $('[data-certs]');
  ul.innerHTML = '';
  CFG.certificates.forEach(c => ul.append(el('li', null, esc(c))));
}

function renderContacts() {
  const ul = $('[data-contacts]');
  ul.innerHTML = '';
  const add = (href, text) => {
    const li = el('li');
    const a = el('a', null, esc(text));
    a.href = href;
    if (/^https?:/.test(href)) { a.target = '_blank'; a.rel = 'noopener'; }
    li.append(a);
    ul.append(li);
  };
  if (CFG.email) add('mailto:' + CFG.email, CFG.email);
  if (CFG.phone) add('tel:' + CFG.phone.replace(/[^+\d]/g, ''), CFG.phone);
  if (CFG.whatsapp) add('https://wa.me/' + CFG.whatsapp, 'WhatsApp');
  for (const k in CFG.social) {
    if (CFG.social[k]) add(CFG.social[k], k[0].toUpperCase() + k.slice(1));
  }
}

/* ---- every call to action ------------------------------------------
   This version has no booking window, so each button is a mail link. The
   address comes from js/config.js and the subject from js/i18n.js, which
   means a visitor reading the page in Polish writes a Polish subject line.
   The address is set on the element rather than written in index.html, so
   there is only ever one copy of it to change. */
function wireMail() {
  const mail = CFG.email;
  $$('[data-mail]').forEach(a => {
    if (!mail) { a.hidden = true; return; }
    a.href = 'mailto:' + mail + '?subject=' + encodeURIComponent(t('mail.subject'));
  });
}

/* ==========================================================================
   Boot
   ========================================================================== */

function renderAll() {
  applyI18n();
  renderHeader();
  renderFigures();
  renderPlatforms();
  renderCases();
  renderServices();
  renderSteps();
  renderAbout();
  renderContacts();
  wireMail();          /* after applyI18n: the subject follows the language */
}

function boot() {
  /* language: remembered → browser → English */
  let saved = null;
  try { saved = localStorage.getItem('vantage-lang'); } catch (e) { /* private mode */ }
  const fromBrowser = (navigator.language || 'en').slice(0, 2).toLowerCase();
  LANG = LANGS.includes(saved) ? saved : (LANGS.includes(fromBrowser) ? fromBrowser : 'en');

  const sel = $('#lang');
  LANGS.forEach(code => {
    const name = new Intl.DisplayNames([LOCALES[code] || code], { type: 'language' });
    sel.append(new Option(name.of(code).replace(/^./, c => c.toUpperCase()), code));
  });
  sel.value = LANG;
  sel.addEventListener('change', e => setLang(e.target.value));

  /* theme: remembered → what the system asks for → dark, which is this
     page's own look */
  let th = null;
  try { th = localStorage.getItem('vantage-theme'); } catch (e) { /* private mode */ }
  if (!th) th = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  setTheme(th);
  $('#theme').addEventListener('click', () =>
    setTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'));

  /* mobile menu */
  const burger = $('#burger');
  burger.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  $$('#nav a').forEach(a => a.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    burger.setAttribute('aria-expanded', 'false');
  }));

  /* the header gets its edge only once the page has moved */
  const onScroll = () => document.body.classList.toggle('scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  renderAll();
}

document.addEventListener('DOMContentLoaded', boot);
