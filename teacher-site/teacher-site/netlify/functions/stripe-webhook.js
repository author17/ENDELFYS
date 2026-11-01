// Stripe tells us when a payment is really completed. Add the order e-mail / Zoom-link sending here.
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
exports.handler = async (event) => {
  let ev;
  try {
    ev = stripe.webhooks.constructEvent(event.body, event.headers['stripe-signature'], process.env.STRIPE_WEBHOOK_SECRET);
  } catch (e) { return { statusCode: 400, body: 'Bad signature' }; }
  if (ev.type === 'checkout.session.completed') {
    const s = ev.data.object;
    console.log('PAID', s.id, s.customer_details && s.customer_details.email, s.amount_total / 100);
    // TODO: send confirmation e-mail / Zoom access link to s.customer_details.email
  }
  return { statusCode: 200, body: 'ok' };
};
