const CACHE_NAME = 'my-site-cache-v1';

const urlsToCache = [
  '/',
  '/favicon.ico',
  '/assets/css/images/ie/footer.png',
  '/assets/css/images/ie/footer.svg',
  '/assets/css/images/bg.jpg',
  '/assets/css/images/overlay-pattern.png',
  '/assets/css/images/overlay.svg',
  '/assets/css/font-awesome.min.css',
  '/assets/css/main.css',
  '/assets/css/noscript.css',
  '/assets/fonts/FontAwesome.otf',
  '/assets/fonts/fontawesome-webfont.eot',
  '/assets/fonts/fontawesome-webfont.svg',
  '/assets/fonts/fontawesome-webfont.ttf',
  '/assets/fonts/fontawesome-webfont.woff',
  '/assets/fonts/fontawesome-webfont.woff2',
  '/assets/images/icons8-source-code-48.ico',
  '/assets/images/icons8-source-code-48.png',
  '/js/index.js',
];

/**
 * Install a service worker
 */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
         console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

/**
 * Cache and return requests
 */
self.addEventListener('fetch', (event) => {
   event.respondWith(
    caches.match(event.request)
      .then((response) => { 
        if (response) {
          return response;
        }

        let fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          (response) => { 
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            let responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

/**
 * Update a service worker
 */
self.addEventListener('activate', (event) => {
  let cacheWhitelist = ['my-site-cache-v1'];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName)  => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});