// Where the enquiry forms send their details (the Google Apps Script web app in
// scripts/google-apps-script/leads.gs). Paste the web app URL (ends in /exec) into LEADS_ENDPOINT below.
// LEADS_TOKEN must match TOKEN in that script. Both can still be overridden by the VITE_LEADS_ENDPOINT
// and VITE_LEADS_TOKEN environment variables. While the endpoint is empty, nothing is sent.
export const LEADS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwQ5bf1GF4ns2m3WSIkzjq9hN1VBKCAcKVQV_yCAu72aHjluthmffF4i6aBvueoECbLAg/exec';
export const LEADS_TOKEN = 'skillit-03abb530fb52ea1e221676d15cfa55f9';
