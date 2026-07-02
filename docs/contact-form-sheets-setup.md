# Contact Form → Google Sheet Setup

**Status: done.** This was set up automatically via the Google Sheets API + Apps Script API (Cloud project `gregkowalczyk-contact-form` under `info@geartopdesign.com`). Submissions land in:

[gregkowalczyk.com — Contact Form Submissions](https://docs.google.com/spreadsheets/d/1tZL2Nb7Ixre2KdicZaFVZwvquWUg7zArGX6fnseA9j4/edit)

The steps below are kept as a reference for redeploying manually if the Apps Script code ever needs to change (edit `Code.gs` in the script editor, or re-run via the API scripts in `Greg/0. AI/GSC-API/sheets-auth.js` + a redeploy script).

---

One-time setup so contact form submissions land directly in a Google Sheet you own. No third-party form service, no server on the Vercel side — the form posts straight to a Google Apps Script Web App tied to the sheet.

## 1. Create the sheet

1. Go to [sheets.new](https://sheets.new)
2. Rename it: **gregkowalczyk.com — Contact Form Submissions**
3. In row 1, add these headers exactly (column A→F):

   ```
   Timestamp | Name | Email | Company | Budget | Message
   ```

## 2. Add the Apps Script

1. In the sheet: **Extensions → Apps Script**
2. Delete whatever's in `Code.gs`, paste this in:

   ```javascript
   function doPost(e) {
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     const p = e.parameter;

     sheet.appendRow([
       new Date(),
       p.name || '',
       p.email || '',
       p.company || '',
       p.budget || '',
       p.message || '',
     ]);

     return ContentService
       .createTextOutput(JSON.stringify({ status: 'ok' }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. Click the disk icon (or Cmd+S) to save. Name the project **Contact Form Handler**.

## 3. Deploy as a Web App

1. Top right: **Deploy → New deployment**
2. Click the gear icon next to "Select type" → choose **Web app**
3. Settings:
   - **Execute as:** Me (your Google account)
   - **Who has access:** Anyone
4. Click **Deploy**
5. You'll hit an "unverified app" warning — this is expected for a personal script. Click **Authorize access → [your account] → Advanced → Go to Contact Form Handler (unsafe) → Allow**
6. Copy the **Web app URL** it gives you — looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`

## 4. Wire it into the site

Send Greg's Claude (or paste it yourself) the Web App URL — it goes into one line in `src/components/Contact.astro`:

```js
const SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/YOUR_ID/exec';
```

That's the only code change needed. The form already handles the submit — it POSTs form-encoded data to this URL client-side and shows a success/error message inline, no page reload.

## Notes

- If you ever need to redeploy the script (e.g. edit the code), Apps Script gives you a **new** URL each time you create a "New deployment." Use **Deploy → Manage deployments → Edit (pencil) → New version** instead, to keep the same URL — otherwise you'll need to update the site again.
- Turn on email notifications for new rows: **Tools → Notification rules** in the sheet, or add a `MailApp.sendEmail(...)` call inside `doPost` if you want an instant email instead of checking the sheet.
- The form has a honeypot field (`website`) — bots that auto-fill hidden inputs get silently dropped instead of writing spam rows to the sheet.
