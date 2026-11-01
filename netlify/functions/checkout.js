// Creates a Stripe Checkout session. Prices are read from config.js on the SERVER,
// so customers cannot change them in the browser.
const fs = require('fs'), path = require('path');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

function loadCatalog() {
  const src = fs.readFileSync(path.join(__dirname, '../../config.js'), 'utf8');
  const w = {}; new Function('window', src)(w); return w;
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method not allowed' };
  try {
    const { items, lang } = JSON.parse(event.body || '{}');
    const { SITE, BOOKS } = loadCatalog();
    const line_items = (items || []).slice(0, 30).map(i => {
      const b = BOOKS.find(x => x.id === i.id);
      if (!b) throw new Error('Unknown product');
      return {
        quantity: Math.min(Math.max(parseInt(i.q) || 1, 1), 20),
        price_data: { currency: 'eur', unit_amount: Math.round(b.price * 100),
          product_data: { name: b[lang === 'en' ? 'en' : 'el'] } }
      };
    });
    if (!line_items.length) throw new Error('Empty cart');
    const origin = process.env.SITE_URL || event.headers.origin;
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items,
      locale: lang === 'en' ? 'en' : 'el',
      shipping_address_collection: { allowed_countries: ['GR', 'CY', 'DE', 'FR', 'IT', 'GB', 'US', 'AU'] },
      phone_number_collection: { enabled: true },
      success_url: origin + '/books.html?paid=1',
      cancel_url: origin + '/books.html'
    });
    return { statusCode: 200, body: JSON.stringify({ url: session.url }) };
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ error: e.message }) };
  }
};
