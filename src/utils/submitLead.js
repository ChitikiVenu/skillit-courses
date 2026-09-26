import { getAttribution } from './analytics.js';

// Sends a form submission to the Google Apps Script web app (scripts/google-apps-script/leads.gs), which
// adds a row to the one leads spreadsheet and emails info@skilliteducation.com. Until VITE_LEADS_ENDPOINT
// is set (see .env.example) nothing is sent and the forms behave as they did before.
const ENDPOINT = import.meta.env.VITE_LEADS_ENDPOINT;
const TOKEN = import.meta.env.VITE_LEADS_TOKEN;

export async function submitLead(fields) {
  if (!ENDPOINT) return { ok: true, sent: false };
  const utm = getAttribution();
  const payload = {
    token: TOKEN,
    page: window.location.pathname,
    utm_source: utm.latest_utm_source || utm.first_utm_source || '',
    utm_medium: utm.latest_utm_medium || utm.first_utm_medium || '',
    utm_campaign: utm.latest_utm_campaign || utm.first_utm_campaign || '',
    ...fields,
  };
  try {
    // A plain-text body with no-cors is a "simple" request, so the browser sends it without a preflight;
    // the response is opaque, so a completed request is treated as delivered.
    await fetch(ENDPOINT, { method: 'POST', mode: 'no-cors', body: JSON.stringify(payload) });
    return { ok: true, sent: true };
  } catch {
    return { ok: false, sent: false };
  }
}
