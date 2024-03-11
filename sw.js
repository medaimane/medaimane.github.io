const CACHE_NAME = 'my-site-cache-v1';

const urlsToCache = [
  '/',
  '/favicon.ico',
  'manifest.json',
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
  '/assets/images/code/icons8-source-code-48.png',
  '/assets/images/code/icons8-source-code-64.png',
  '/assets/images/code/icons8-source-code-96.png',
  '/assets/images/code/icons8-source-code-192.png',
  '/assets/images/code/icons8-source-code-512.png',
  '/src/index.js',
];

async function installServiceWorker(event) {
  try {
    const cache = await caches.open(CACHE_NAME);
    const result = await cache.addAll(urlsToCache);

    await event.waitUntil(result);
  } catch (error) {
    console.log('Install SW failed: ', error);
  }
}

const installListener = (event) => {
  installServiceWorker(event);
};

self.addEventListener('install', installListener);

async function cacheAndReturnRequests(event) {
  try {
    const cachedResponse = await caches.match(event.request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const fetchRequest = event.request.clone();

    const response = await fetch(fetchRequest);
    if (!response || response.status !== 200 || response.type !== 'basic') {
      return response;
    }

    const responseToCache = response.clone();
    const cache = await caches.open(CACHE_NAME);
    cache.put(event.request, responseToCache);

    await event.respondWith(res);
  } catch (error) {
    console.log('Cache requets failed: ', error);
  }
}

const fetchListener = (event) => {
  cacheAndReturnRequests(event);
};
self.addEventListener('fetch', fetchListener);

async function updateServiceWorker(event) {
  try {
    const cacheWhitelist = ['my-site-cache-v1'];
    const cacheNames = await caches.keys();
    const results = await Promise.all(
      cacheNames.map((cacheName) => {
        if (cacheWhitelist.indexOf(cacheName) === -1) {
          return caches.delete(cacheName);
        }
      })
    );

    await event.waitUntil(results);
  } catch (error) {
    console.log('Update SW failed: ', error);
  }
}

const activateListener = (event) => {
  updateServiceWorker(event);
};
self.addEventListener('activate', activateListener);
