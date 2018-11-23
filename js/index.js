window.onload =  event => {
    document.body.classList.remove("is-preload");
};
window.ontouchmove = event => {
    return false;
};
window.onorientationchange = event => {
    e.defaultPrevented()
    document.body.scrollTop = 0;
};

if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        navigator.serviceWorker.register('/sw.js').then((registration) => {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope :)', registration.scope);
        }, err => {
            // registration failed :(
            console.log('ServiceWorker registration failed :(', err);
        });
    });
}