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

  const cards = document.querySelectorAll('.mini-card, .stat-card, .dark-card');
  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 18px 32px rgba(255,255,255,0.08)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '';
    });
  });
});
