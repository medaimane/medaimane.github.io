const start = () => {
    window.addEventListener('load', async () => {
        await handleServiceWorkerRegistration();
        appendSocialMediaItems();
    });
};

start();