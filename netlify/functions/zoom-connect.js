// Starts the Zoom OAuth sign-in for the Centre administrator.
// Needs env: ZOOM_CLIENT_ID, SITE_URL. ?check=1 only reports whether it is configured.
exports.handler = async (event) => {
  const id = process.env.ZOOM_CLIENT_ID, site = process.env.SITE_URL;
  if (event.queryStringParameters && event.queryStringParameters.check)
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ready: !!(id && site && process.env.ZOOM_CLIENT_SECRET) }) };
  if (!id || !site) return { statusCode: 500, body: 'Zoom is not configured (ZOOM_CLIENT_ID / SITE_URL).' };
  const redirect = site.replace(/\/$/, '') + '/.netlify/functions/zoom-callback';
  const url = 'https://zoom.us/oauth/authorize?response_type=code&client_id=' + encodeURIComponent(id) + '&redirect_uri=' + encodeURIComponent(redirect);
  return { statusCode: 302, headers: { Location: url } };
};
