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
