/* ==========================================================================
   Vantage Lite — what you sell, and what it did for two clients.

   Everything here is placeholder content written for the template. The names
   are invented and the numbers are made up; they describe no real business.
   Replace them with your own before the site goes live — a landing page that
   shows someone else's results is worth less than one that shows none.

   Prices are plain numbers. The page writes them the way each language does
   (PLN → "4 500 zł" in Polish, "PLN 4,500" in English), using the currency
   set in js/config.js. `period` makes a price read as monthly.
   ========================================================================== */

/* ---- what you do -----------------------------------------------------
   `key` points at js/i18n.js, where the name and the one-line description
   live in all three languages. Remove a row and the list closes up. */
const SERVICES = [
  { id: 'audit',  key: 'svc.audit',  price: 1200, period: null },
  { id: 'setup',  key: 'svc.setup',  price: 3500, period: null },
  { id: 'manage', key: 'svc.manage', price: 4500, period: 'mo' }
];

/* ---- two results -----------------------------------------------------
   Each case shows ONE number over time, because one honest line beats four
   crowded ones. `series` is that number month by month. `unit` decides how
   the chart writes a value:
     'x'    → 3.8×        (ratio: ROAS, ROI)
     'money'→ PLN 96      (cost per lead, cost per sale)
     'n'    → 74          (plain count: leads, demos, orders)
   `lower` says that smaller is better, so the page labels the change
   "down 69%" rather than pretending every fall is a loss.

   Six numbers per case is the whole chart. There is no charting library in
   this repository and no data file: js/main.js turns this array into the
   line, the area, the dots and the hover tooltip. */
const CASES = [
  {
    id: 'home',
    key: 'case.home',
    unit: 'x',
    lower: false,
    labels: ['m1', 'm2', 'm3', 'm4', 'm5', 'm6'],
    series: [1.9, 2.1, 2.6, 3.2, 3.9, 4.3],
    metrics: [
      { key: 'case.home.m1', from: '1.9×', to: '4.3×' },
      { key: 'case.home.m2', from: 'PLN 61', to: 'PLN 38' }
    ]
  },
  {
    id: 'saas',
    key: 'case.saas',
    unit: 'money',
    lower: true,
    labels: ['m1', 'm2', 'm3', 'm4', 'm5', 'm6'],
    series: [310, 268, 201, 164, 118, 96],
    metrics: [
      { key: 'case.saas.m1', from: 'PLN 310', to: 'PLN 96' },
      { key: 'case.saas.m2', from: '22', to: '71' }
    ]
  }
];

/* ---- how the work runs ----------------------------------------------
   Four steps. `week` is printed as "week 1", "weeks 3–4" and so on, so the
   client sees how long they wait before anything is live. */
const STEPS = [
  { key: 'step.1', week: '1' },
  { key: 'step.2', week: '2' },
  { key: 'step.3', week: '3–4' },
  { key: 'step.4', week: '5+' }
];
