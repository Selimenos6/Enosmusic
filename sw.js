const CACHE_NAME = 'Enosmusic';
self.addEventListener('install', () => {
  console.log('Service Worker yüklendi');
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
