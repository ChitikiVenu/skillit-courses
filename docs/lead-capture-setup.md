# Enquiry forms → Google Sheet + email

Every form on the site (the inline lead forms and the "Talk to an Advisor" popup) posts to a Google Apps
Script web app. It appends one row to the leads sheet and emails info@skilliteducation.com.

1. Open the leads sheet, then Extensions → Apps Script.
2. Replace the file's contents with `scripts/google-apps-script/leads.gs` and set `TOKEN` to a long random string.
3. Deploy → New deployment → type "Web app" → Execute as **Me** → Who has access **Anyone** → Deploy.
   Approve the permissions (Sheets and sending email).
4. Copy the web app URL (ends in `/exec`).
5. In Vercel → the project → Settings → Environment Variables add
   `VITE_LEADS_ENDPOINT` = that URL and `VITE_LEADS_TOKEN` = the same token, then redeploy.
