// Cloud Focal - Clean URL Service Worker
// Automatically serves .html files for extensionless clean URLs (e.g. on page refresh)
self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(e) {
  var req = e.request;
  if (req.mode === 'navigate' && req.method === 'GET') {
    var url = new URL(req.url);
    if (url.origin === self.location.origin) {
      var pathname = url.pathname;
      if (pathname !== '/' && !pathname.includes('.')) {
        var cleanPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
        var target = cleanPath + '.html' + url.search + url.hash;
        e.respondWith(
          fetch(target).catch(function() {
            return fetch(req);
          })
        );
      }
    }
  }
});
