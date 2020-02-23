const handleServiceWorkerRegistration = async () => {
  if ('serviceWorker' in navigator) {
    await serviceWorkerRegistration();
  }
};

const serviceWorkerRegistration = async () => {
  try {
    const registration = await navigator.serviceWorker.register('./sw.js');
    console.log(
      'ServiceWorker registration successful with scope :)',
      registration.scope
    );
  } catch (error) {
    console.log('ServiceWorker registration failed :(', error);
  }
}