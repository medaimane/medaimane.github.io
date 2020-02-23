window.addEventListener('load', async () => {
  document.body.classList.remove('is-preload');
});

window.addEventListener('touchmove', () => false);

window.addEventListener('orientationchange', e => {
  e.preventDefault();
  document.body.scrollTop = 0;
});
