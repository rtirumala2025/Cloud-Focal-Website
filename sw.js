// Cloud Focal - Service worker disabled.
// Clean URLs are handled natively by Vercel's cleanUrls config (vercel.json).
// This SW now only unregisters itself to clear out any stale cached version
// from client devices that still have the old redirect-based worker installed.
self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    self.registration.unregister().then(function() {
      return self.clients.matchAll();
    }).then(function(clients) {
      clients.forEach(function(client) {
        client.navigate(client.url);
      });
    })
  );
});
