// Gives a PAYING student a Zoom Meeting SDK signature (role 0 = attendee, cannot host).
// Needs env: STRIPE_SECRET_KEY, ZOOM_CLIENT_ID, ZOOM_CLIENT_SECRET, ZOOM_MEETING_ID (digits only), ZOOM_PASSCODE
const crypto = require('crypto');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const b64 = o => Buffer.from(typeof o === 'string' ? o : JSON.stringify(o)).toString('base64url');

exports.handler = async (event) => {
  try {
    const id = (event.queryStringParameters || {}).session_id;
    if (!id) return { statusCode: 400, body: 'missing' };
    const s = await stripe.checkout.sessions.retrieve(id);
    if (s.payment_status !== 'paid' || !s.metadata || s.metadata.type !== 'pass')
      return { statusCode: 403, body: 'not paid' };
    const mn = String(process.env.ZOOM_MEETING_ID || '').replace(/\D/g, '');
    const iat = Math.floor(Date.now() / 1000) - 30, exp = iat + 60 * 60 * 3; // valid 3 hours
    const head = b64({ alg: 'HS256', typ: 'JWT' });
    const body = b64({ appKey: process.env.ZOOM_CLIENT_ID, mn, role: 0, iat, exp, tokenExp: exp });
    const sig = crypto.createHmac('sha256', process.env.ZOOM_CLIENT_SECRET).update(head + '.' + body).digest('base64url');
    return { statusCode: 200, body: JSON.stringify({
      signature: head + '.' + body + '.' + sig, clientId: process.env.ZOOM_CLIENT_ID,
      meetingNumber: mn, password: process.env.ZOOM_PASSCODE,
      name: (s.customer_details && s.customer_details.name) || 'Student' }) };
  } catch (e) { return { statusCode: 403, body: 'no' }; }
};
