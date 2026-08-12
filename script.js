const header = document.querySelector('[data-header]');
const revealElements = document.querySelectorAll('.reveal');

const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => element.classList.add('is-visible'));
}

document.getElementById('year').textContent = new Date().getFullYear();

const track = document.querySelector('.carousel-track');
if (track) {
  const cards = Array.from(track.querySelectorAll('.review-card'));
  const dotsWrap = document.querySelector('.carousel-dots');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scrollBehavior = reduceMotion ? 'auto' : 'smooth';

  const dots = cards.map((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'dot';
    dot.role = 'tab';
    dot.setAttribute('aria-label', `Ga naar review ${i + 1}`);
    dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    dot.addEventListener('click', () => {
      cards[i].scrollIntoView({ behavior: scrollBehavior, inline: 'start', block: 'nearest' });
    });
    dotsWrap.appendChild(dot);
    return dot;
  });

  const setActive = (index) => {
    dots.forEach((dot, i) => dot.setAttribute('aria-selected', i === index ? 'true' : 'false'));
  };

  const closestCardIndex = () => {
    let closest = 0;
    let closestDist = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - track.scrollLeft);
      if (dist < closestDist) { closestDist = dist; closest = i; }
    });
    return closest;
  };

  let scrollTimer;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => setActive(closestCardIndex()), 100);
  }, { passive: true });

  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(cards.length - 1, index));
    cards[clamped].scrollIntoView({ behavior: scrollBehavior, inline: 'start', block: 'nearest' });
  };

  prevBtn?.addEventListener('click', () => goTo(closestCardIndex() - 1));
  nextBtn?.addEventListener('click', () => goTo(closestCardIndex() + 1));

  track.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') { event.preventDefault(); goTo(closestCardIndex() + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(closestCardIndex() - 1); }
  });
}
