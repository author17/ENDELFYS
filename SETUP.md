# Setup
1. Edit `config.js` (name, email, Zoom link/ID/passcode, lesson day+time, books and prices).
2. Banner video: copy an mp4 next to index.html and set `bannerVideo: "banner.mp4"`.
3. Stripe (non-profit): create the account under the organisation's name, then
   Netlify -> Site settings -> Environment variables:
   - STRIPE_SECRET_KEY   (sk_live_... from Stripe Dashboard -> Developers -> API keys)
   - STRIPE_WEBHOOK_SECRET (whsec_... after adding the endpoint https://YOURSITE/.netlify/functions/stripe-webhook, event checkout.session.completed)
   - ZOOM_JOIN_URL, ZOOM_MEETING_ID, ZOOM_PASSCODE (the Zoom details; only paying students receive them)
   - SITE_URL (https://yourdomain.gr)
4. Deploy the whole folder to Netlify (drag & drop at app.netlify.com/drop works for the site; use Git deploy for the functions).
Payouts go to the bank account the organisation adds in Stripe.

## No recording / no download (set in Zoom by the host)
Zoom Settings -> Recording: turn OFF local recording, cloud recording and "Allow participants to record".
Use Zoom Webinar (view-only attendees) so viewers cannot share or speak. A viewer filming their screen cannot be technically blocked;
the site shows each paying student's e-mail as a moving watermark over the lesson window to discourage it.

## Zoom inside the page (Meeting SDK)
1. https://marketplace.zoom.us -> Develop -> Build App -> "Meeting SDK" (General app). Copy the Client ID and Client Secret.
2. Netlify environment variables: ZOOM_CLIENT_ID, ZOOM_CLIENT_SECRET, ZOOM_MEETING_ID (digits only), ZOOM_PASSCODE
   (plus ZOOM_JOIN_URL as the fallback link). Students are signed in as attendees (role 0), never as hosts.
3. In the Zoom meeting settings: mute participants on entry, turn OFF "Allow participants to unmute themselves" and recording.
   To let students speak later, just allow unmute in Zoom - no website change needed.
4. config.js: zoomEmbed true = in-page, false = opens Zoom in a new tab. If the embedded join fails the site falls back to the new-tab link.
Note: an app that joins meetings outside your own Zoom account needs Zoom app approval; for your friend's own meetings it works in development mode.

## Zoom host connection (button "Σύνδεση λογαριασμού Zoom")
In the Zoom Marketplace app add the Redirect URL `https://YOUR-SITE/.netlify/functions/zoom-callback` and the scope `user:read`. The administrator then presses the button on the site, signs in to Zoom, and sees the account and personal meeting ID to copy into the Netlify variables above.
