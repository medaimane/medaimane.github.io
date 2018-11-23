var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
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
  '/assets/sass/libs/_breakpoints.scss',
  '/assets/sass/libs/_functions.scss',
  '/assets/sass/libs/_mixins.scss',
  '/assets/sass/libs/_vars.scss',
  '/assets/sass/libs/_vendor.scss',
  '/assets/sass/main.scss',
  '/assets/sass/noscript.scss',

  '/js/index.js'
];

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function (cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});


self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
    .then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }

      // IMPORTANT: Clone the request. A request is a stream and
      // can only be consumed once. Since we are consuming this
      // once by cache and once by the browser for fetch, we need
      // to clone the response.
      var fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(
        function (response) {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // IMPORTANT: Clone the response. A response is a stream
          // and because we want the browser to consume the response
          // as well as the cache consuming the response, we need
          // to clone it so we have two streams.
          var responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(function (cache) {
              cache.put(event.request, responseToCache);
            });

          return response;
        }
      );
    })
  );
});