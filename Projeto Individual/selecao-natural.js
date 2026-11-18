document.addEventListener('DOMContentLoaded', () => {
  const revealTargets = document.querySelectorAll(
    '.hero, .content-section, .mini-card, .info-card, .stat-card, .dark-card, .quote-card'
  );

  revealTargets.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(18px)';
    element.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
    element.style.transitionDelay = `${index * 15}ms`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((element) => observer.observe(element));

  const bars = document.querySelectorAll('.layer-bar, .trophic-bar');
  bars.forEach((bar, index) => {
    bar.style.opacity = '0.9';
    bar.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    bar.addEventListener('mouseenter', () => {
      bar.style.transform = 'translateX(6px)';
      bar.style.opacity = '1';
    });
    bar.addEventListener('mouseleave', () => {
      bar.style.transform = 'translateX(0)';
      bar.style.opacity = '0.9';
    });
    bar.style.transitionDelay = `${index * 30}ms`;
  });
});
