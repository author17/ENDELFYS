// Returns the Zoom details ONLY if the Stripe session is a paid lesson pass.
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
exports.handler = async (event) => {
  try {
    const id = (event.queryStringParameters || {}).session_id;
    if (!id) return { statusCode: 400, body: 'missing' };
    const s = await stripe.checkout.sessions.retrieve(id);
    if (s.payment_status !== 'paid' || !s.metadata || s.metadata.type !== 'pass')
      return { statusCode: 403, body: 'not paid' };
    return { statusCode: 200, body: JSON.stringify({
      url: process.env.ZOOM_JOIN_URL, id: process.env.ZOOM_MEETING_ID, pass: process.env.ZOOM_PASSCODE,
      email: s.customer_details && s.customer_details.email }) };
  } catch (e) { return { statusCode: 403, body: 'no' }; }
};
