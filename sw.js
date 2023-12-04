// Service worker file (sw.js)

const cacheName = 'my-pwa-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/offline',
  
  // Add other essential files and assets here
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
