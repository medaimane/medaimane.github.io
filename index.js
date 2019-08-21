window.addEventListener('load', async () => {
    document.body.classList.remove("is-preload");

    if ('serviceWorker' in navigator) {
        await handleServiceWorkerRegistration();
    }

});
window.addEventListener('touchmove', () => false);
window.addEventListener('orientationchange', e => {
    e.preventDefault();
    document.body.scrollTop = 0;
});

const handleServiceWorkerRegistration = async () => {
    try {
        const registration = await navigator.serviceWorker.register('./sw.js');
        console.log('ServiceWorker registration successful with scope :)', registration.scope);
    } catch (error) {
        console.log('ServiceWorker registration failed :(', error);
    }
};
