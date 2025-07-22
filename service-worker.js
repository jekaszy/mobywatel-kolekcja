self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('mobywatel-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json'
        // Dodaj inne pliki jak np. /css/style.css, /js/app.js itd.
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
