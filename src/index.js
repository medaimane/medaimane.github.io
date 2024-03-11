const start = () => {
  window.addEventListener('load', () => {
    registerServiceWorker();
    addSocialLinks();

    document.body.classList.remove('is-preload');
  });

  window.addEventListener('touchmove', () => false);
  window.addEventListener('orientationchange', (e) => {
    e.preventDefault();
    document.body.scrollTop = 0;
  });
};

start();
