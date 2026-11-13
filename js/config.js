/* ==========================================================================
   Vantage Lite — one place to change everything a new owner needs to change.

   Edit this file first: name, contacts, currency, the three figures in the
   hero. There is no build step and no framework — the page reads these values
   when it loads.
   ========================================================================== */

const CFG = {
  /* ---- who you are ----------------------------------------------------
     `name` is printed in the header, the footer and the browser tab.
     `role` and `tagline` are translated, so each language gets its own line. */
  name: 'Marek Dudek',
  initials: 'MD',              /* drawn mark in the header; 2 letters look best */
  role: {
    en: 'Paid media specialist',
    pl: 'Specjalista paid media',
    uk: 'Спеціаліст із платного трафіку'
  },
  tagline: {
    en: 'Meta · Google · TikTok',
    pl: 'Meta · Google · TikTok',
    uk: 'Meta · Google · TikTok'
  },

  /* ---- contacts -------------------------------------------------------
     Written into the page as real links: tel: and mailto:. The phone is
     printed exactly as you type it here, so type it the way clients read it.
     Leave a line empty and the page hides it instead of showing a dead link.

     `email` is also where every "write to me" button points. */
  phone: '+48 663 214 870',
  email: 'marek@vantage.example',
  whatsapp: '',                /* digits only, e.g. '48663214870'. Empty = hide */
  city: { en: 'Warsaw', pl: 'Warszawa', uk: 'Варшава' },
  remote: true,

  social: {
    linkedin: 'https://linkedin.com/',
    instagram: '',
    facebook: ''
  },

  /* ---- money ----------------------------------------------------------
     One ISO code for the whole site. Prices live as plain numbers in
     js/offer.js; each language writes that same number its own way
     (PLN → "4 500 zł" in Polish, "PLN 4,500" in English). To quote in euro,
     change this line and nothing else. */
  currency: 'PLN',

  /* ---- the numbers in the hero ---------------------------------------
     Three figures, nothing more — the page is not a dashboard. `value` is
     printed as you type it, so you decide on "3.8×" or "380%".
     ⚠️ These are yours to prove. Replace them before the site goes live. */
  figures: [
    { value: '7', key: 'fig.years' },
    { value: '2.4M', key: 'fig.spend', prefix: 'PLN ' },
    { value: '41', key: 'fig.clients' }
  ],

  /* ---- the platforms you actually run --------------------------------
     Plain text on purpose: platform logos are trademarks, and a template
     that ships them puts its buyer in the wrong. Remove a line you do not
     run — an empty row is worse than a short one. */
  platforms: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'LinkedIn Ads', 'GA4', 'Looker Studio'],

  /* ---- about ----------------------------------------------------------
     `photo` is a file in img/. Leave it empty and the card keeps its drawn
     placeholder, so the page never shows a broken frame. */
  photo: 'img/portrait.jpg',
  since: 2019,
  certificates: [
    'Google Ads Search · Measurement',
    'Meta Certified Media Buying Professional',
    'GA4 · Looker Studio'
  ]
};
