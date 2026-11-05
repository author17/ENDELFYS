// Zoom redirects here after the administrator presses "Allow".
// It exchanges the code, reads the account, and shows the details to copy into Netlify.
// No tokens are stored.
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
exports.handler = async (event) => {
  const page = (body) => ({ statusCode: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' },
    body: '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><body style="font-family:system-ui;background:#183a9c;color:#fff;max-width:560px;margin:60px auto;padding:0 20px;line-height:1.6">' + body + '<p><a style="color:#ffd67a" href="/index.html">&larr; Back to site</a></p>' });
  try {
    const code = (event.queryStringParameters || {}).code;
    if (!code) return page('<h2>Zoom connection cancelled</h2>');
    const site = (process.env.SITE_URL || '').replace(/\/$/, '');
    const basic = Buffer.from(process.env.ZOOM_CLIENT_ID + ':' + process.env.ZOOM_CLIENT_SECRET).toString('base64');
    const tr = await fetch('https://zoom.us/oauth/token', { method: 'POST',
      headers: { Authorization: 'Basic ' + basic, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ grant_type: 'authorization_code', code, redirect_uri: site + '/.netlify/functions/zoom-callback' }) });
    const t = await tr.json(); if (!t.access_token) throw new Error(t.reason || t.error || 'token');
    const me = await (await fetch('https://api.zoom.us/v2/users/me', { headers: { Authorization: 'Bearer ' + t.access_token } })).json();
    return page('<h2>&#10003; Zoom connected</h2><p><b>' + esc(me.first_name) + ' ' + esc(me.last_name) + '</b><br>' + esc(me.email) +
      '</p><p>Meeting ID (personal): <b>' + esc(me.pmi) + '</b><br>Link: ' + esc(me.personal_meeting_url) +
      '</p><p>Copy these into Netlify as <code>ZOOM_MEETING_ID</code> and <code>ZOOM_JOIN_URL</code> (see SETUP.md).</p>');
  } catch (e) { return page('<h2>Zoom connection failed</h2><p>' + esc(e.message) + '</p>'); }
};
