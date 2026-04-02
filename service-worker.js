const VERSION = 'v81_final';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  const req = event.request;

  if (req.method !== 'GET') return;

  event.respondWith(
    fetch(req, { cache: 'no-store' }).catch(() => fetch(req))
  );
});
