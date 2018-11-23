var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  'https://medaimane.github.io/',
  'https://medaimane.github.io/favicon.ico',
  'https://medaimane.github.io/assets/css/images/ie/footer.png',
  'https://medaimane.github.io/assets/css/images/ie/footer.svg',
  'https://medaimane.github.io/assets/css/images/bg.jpg',
  'https://medaimane.github.io/assets/css/images/overlay-pattern.png',
  'https://medaimane.github.io/assets/css/images/overlay.svg',
  'https://medaimane.github.io/assets/css/font-awesome.min.css',
  'https://medaimane.github.io/assets/css/main.css',
  'https://medaimane.github.io/assets/css/noscript.css',
  'https://medaimane.github.io/assets/fonts/FontAwesome.otf',
  'https://medaimane.github.io/assets/fonts/fontawesome-webfont.eot',
  'https://medaimane.github.io/assets/fonts/fontawesome-webfont.svg',
  'https://medaimane.github.io/assets/fonts/fontawesome-webfont.ttf',
  'https://medaimane.github.io/assets/fonts/fontawesome-webfont.woff',
  'https://medaimane.github.io/assets/fonts/fontawesome-webfont.woff2',
  'https://medaimane.github.io/assets/images/icons8-source-code-48.ico',
  'https://medaimane.github.io/assets/images/icons8-source-code-48.png',
  'https://medaimane.github.io/js/index.js',
];

self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(async () => {
    const cache = await caches.open(CACHE_NAME);
    console.log('Opened cache');
    return cache.addAll(urlsToCache);
  });
});


self.addEventListener('fetch', event => {
  event.respondWith( async () => {
    let response = await caches.match(event.request);

    if (response) {
      return response;
    }

    const fetchRequest = event.request.clone();

    response = await fetch(fetchRequest);

    if (!response || response.status !== 200 || response.type !== 'basic') {
      return response;
    }

    const responseToCache = response.clone();

    const cache = await caches.open(CACHE_NAME);

    cache.put(event.request, responseToCache);

    return response;
  });
});