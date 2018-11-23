window.onload = function (event) {
    document.body.classList.remove("is-preload");
};
window.ontouchmove = function (event) {
    return false;
};
window.onorientationchange = function (event) {
    e.defaultPrevented()
    document.body.scrollTop = 0;
};

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}