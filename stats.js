// Anonyme besøgstal: kun side, hvilken side man kom fra og mobil/computer. Ingen cookies, IP eller id.
(function () {
  if (location.hostname !== 'kalora.dk' && location.hostname !== 'www.kalora.dk') return;
  try {
    var ref = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, '') : null;
    if (ref === 'kalora.dk') ref = null;
    fetch('https://skhefgzgvofjiwovwftd.supabase.co/rest/v1/web_visits', {
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json', apikey: 'sb_publishable_PA55-0OuFXbJbVYE4hPvaQ_PRP6_xUd', Prefer: 'return=minimal' },
      body: JSON.stringify({ path: location.pathname.slice(0, 200), ref: ref ? ref.slice(0, 100) : null, device: matchMedia('(max-width: 760px)').matches ? 'mobil' : 'computer' })
    }).catch(function () {});
  } catch (e) {}
})();
