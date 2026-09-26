// Skill IT Education — enquiry form receiver (Google Apps Script web app).
// Every website form posts here. Each submission is appended as a row to ONE Google Sheet and emailed to
// the admissions inbox. Setup steps are in docs/lead-capture-setup.md.

const SHEET_ID = '1CnYJRbcpC5O3kU8qEHyYNBiz6JTEi5ldDliBwCZgRV8';
const NOTIFY_EMAIL = 'info@skilliteducation.com';
// Must match VITE_LEADS_TOKEN on the website. Any long random string; it only keeps stray bots out.
const TOKEN = 'CHANGE_ME_TO_A_LONG_RANDOM_STRING';

const HEADERS = ['Timestamp', 'Form', 'Page', 'Name', 'Mobile / Phone', 'Email', 'Profession', 'Course', 'Message', 'Brochure sent', 'Source (utm)', 'Medium (utm)', 'Campaign (utm)'];

// Stops a cell that starts with = + - @ from being run as a spreadsheet formula.
const safe = (v) => {
  const s = String(v == null ? '' : v).slice(0, 2000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
};

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    const d = JSON.parse(e.postData.contents);
    if (d.token !== TOKEN || d.website) return out('ignored'); // wrong token or the hidden honeypot field was filled

    lock.waitLock(20000);
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
    }
    const row = [
      new Date(),
      d.form, d.page, d.name, d.phone, d.email, d.profession, d.course, d.message, d.brochure,
      d.utm_source, d.utm_medium, d.utm_campaign,
    ].map((v, i) => (i === 0 ? v : safe(v)));
    sheet.appendRow(row);

    const lines = [
      ['Name', d.name], ['Mobile / Phone', d.phone], ['Email', d.email], ['Profession', d.profession],
      ['Course', d.course], ['Message', d.message], ['Form', d.form], ['Page', d.page], ['Brochure', d.brochure],
    ].filter((r) => r[1]);
    const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]);
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: 'New enquiry: ' + (d.name || 'website visitor') + (d.course ? ' — ' + d.course : ''),
      htmlBody: '<p>A new enquiry came in on the Skill IT Education website.</p><table cellpadding="6">' +
        lines.map((r) => '<tr><td><b>' + esc(r[0]) + '</b></td><td>' + esc(r[1]) + '</td></tr>').join('') + '</table>',
      replyTo: d.email || NOTIFY_EMAIL,
    });
    return out('ok');
  } catch (err) {
    return out('error');
  } finally {
    try { lock.releaseLock(); } catch (x) { /* not held */ }
  }
}

function out(text) {
  return ContentService.createTextOutput(text);
}
