const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('./sw.js');
      console.log('SW registration success :), scope: ', registration.scope);
    } catch (error) {
      console.log('SW registration failed :(', error);
    }
  }
};
