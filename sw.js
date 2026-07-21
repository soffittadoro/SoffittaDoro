self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('soffitta-store').then((cache) => cache.addAll([
      '/SoffittaDoro/',
      '/SoffittaDoro/index.html',
      '/SoffittaDoro/nuovologo.jpeg'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
