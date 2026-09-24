// Lightweight analytics layer for the measurement plan (GA4 events, UTM persistence).
//
// Nothing is sent anywhere until a GA4 measurement ID is set in VITE_GA_ID (see .env.example) — with
// no ID, `track()` is a no-op, so the events are wired and ready without loading any third-party
// script. Events: page_view, course_view, form_start, form_submit, click_to_call, whatsapp_click,
// brochure_download. UTM parameters are kept first-touch (never overwritten) and latest-touch.

const GA_ID = import.meta.env.VITE_GA_ID;
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
const FIRST_KEY = 'skillit_utm_first';
const LATEST_KEY = 'skillit_utm_latest';

const read = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || 'null') || {};
  } catch {
    return {};
  }
};
const write = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable (private mode) — attribution just isn't persisted */
  }
};

function captureUtm() {
  const params = new URLSearchParams(window.location.search);
  const found = {};
  UTM_KEYS.forEach((k) => {
    if (params.get(k)) found[k] = params.get(k);
  });
  if (!Object.keys(found).length) return;
  if (!Object.keys(read(FIRST_KEY)).length) write(FIRST_KEY, found);
  write(LATEST_KEY, found);
}

export function getAttribution() {
  const first = read(FIRST_KEY);
  const latest = read(LATEST_KEY);
  const out = {};
  Object.entries(first).forEach(([k, v]) => (out[`first_${k}`] = v));
  Object.entries(latest).forEach(([k, v]) => (out[`latest_${k}`] = v));
  return out;
}

export function track(event, params = {}) {
  if (!GA_ID || typeof window.gtag !== 'function') return;
  window.gtag('event', event, { ...getAttribution(), ...params });
}

export function trackPageView(path) {
  track('page_view', { page_path: path, page_location: window.location.href, page_title: document.title });
}

export function initAnalytics() {
  captureUtm();

  if (GA_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    // page views are sent by the router hook (this is a single-page app), so the automatic one is off
    window.gtag('config', GA_ID, { send_page_view: false });
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
    document.head.appendChild(s);
  }

  // One delegated listener covers every call, WhatsApp and brochure link on the site.
  document.addEventListener(
    'click',
    (e) => {
      const a = e.target.closest?.('a[href]');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (href.startsWith('tel:')) track('click_to_call', { link_url: href });
      else if (href.includes('wa.me/')) track('whatsapp_click', { link_url: href });
      else if (/\.pdf($|\?)/i.test(href)) track('brochure_download', { file_name: href.split('/').pop() });
    },
    true,
  );

  // form_start: the first time a visitor focuses a field in a given form
  const started = new WeakSet();
  document.addEventListener('focusin', (e) => {
    const form = e.target.closest?.('form');
    if (!form || started.has(form)) return;
    started.add(form);
    track('form_start', { form_id: form.id || form.className || 'form' });
  });
}
