const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  if (open) {
    nav.style.display = 'flex';
    nav.style.position = 'absolute';
    nav.style.top = '65px';
    nav.style.right = 'var(--pad)';
    nav.style.flexDirection = 'column';
    nav.style.background = 'var(--bg)';
    nav.style.padding = '18px';
    nav.style.border = '1px solid var(--line)';
  } else nav.removeAttribute('style');
});

document.querySelectorAll('video').forEach(video => {
  video.addEventListener('mouseenter', () => video.play().catch(()=>{}));
  video.addEventListener('mouseleave', () => video.pause());
});
