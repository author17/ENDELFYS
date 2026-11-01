# Setup
1. Edit `config.js` (name, email, Zoom link/ID/passcode, lesson day+time, books and prices).
2. Banner video: copy an mp4 next to index.html and set `bannerVideo: "banner.mp4"`.
3. Stripe (non-profit): create the account under the organisation's name, then
   Netlify -> Site settings -> Environment variables:
   - STRIPE_SECRET_KEY   (sk_live_... from Stripe Dashboard -> Developers -> API keys)
   - STRIPE_WEBHOOK_SECRET (whsec_... after adding the endpoint https://YOURSITE/.netlify/functions/stripe-webhook, event checkout.session.completed)
   - SITE_URL (https://yourdomain.gr)
4. Deploy the whole folder to Netlify (drag & drop at app.netlify.com/drop works for the site; use Git deploy for the functions).
Payouts go to the bank account the organisation adds in Stripe.
