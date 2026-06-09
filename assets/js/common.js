function initSelectorHub() {
  const hub = document.querySelector('#selxHub');
  if (!hub) return;

  const modules = document.querySelectorAll('.selx-module');
  const hubCards = hub.querySelectorAll('.selx-hub-card');
  const backBtns = document.querySelectorAll('.selx-back-btn');

  function showModule(targetId) {
    hub.style.display = 'none';
    modules.forEach(m => {
      m.style.display = m.id === 'mod-' + targetId ? 'block' : 'none';
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showHub() {
    modules.forEach(m => { m.style.display = 'none'; });
    hub.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  hubCards.forEach(card => {
    card.addEventListener('click', () => {
      const target = card.dataset.target;
      if (target) showModule(target);
    });
  });

  backBtns.forEach(btn => {
    btn.addEventListener('click', showHub);
  });

  const hash = window.location.hash.replace('#', '');
  if (hash && document.querySelector('#mod-' + hash)) {
    showModule(hash);
  }
}

document.addEventListener('DOMContentLoaded', initSelectorHub);

// 首页头图轮播
function initBannerCarousel() {
  const carousels = document.querySelectorAll('.banner-carousel');
  carousels.forEach((carousel) => {
    const slides = carousel.querySelectorAll('.banner-slide');
    const dots = carousel.querySelectorAll('.banner-dot');
    const prevBtn = carousel.querySelector('.banner-prev');
    const nextBtn = carousel.querySelector('.banner-next');
    if (slides.length === 0) return;

    let index = 0;
    let timer = null;
    const INTERVAL = 4500;

    const show = (i) => {
      const next = (i + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle('active', k === next));
      dots.forEach((d, k) => d.classList.toggle('active', k === next));
      index = next;
    };

    const start = () => {
      stop();
      timer = setInterval(() => show(index + 1), INTERVAL);
    };
    const stop = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    if (prevBtn) prevBtn.addEventListener('click', () => { show(index - 1); start(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { show(index + 1); start(); });
    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const target = Number(dot.dataset.index);
        if (!Number.isNaN(target)) {
          show(target);
          start();
        }
      });
    });

    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);

    // 触摸滑动支持
    let touchStartX = 0;
    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].clientX;
      stop();
    }, { passive: true });
    carousel.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1));
      start();
    }, { passive: true });

    start();
  });
}

document.addEventListener('DOMContentLoaded', initBannerCarousel);

