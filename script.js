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

// mobile menu
const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileNav = document.querySelector('[data-mobile-nav]');
if (menuToggle && mobileNav) {
  const closeMenu = () => {
    mobileNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.innerHTML = '<svg class="icon" width="20" height="20" aria-hidden="true"><use href="#icon-menu"></use></svg>';
  };
  const openMenu = () => {
    mobileNav.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.innerHTML = '<svg class="icon" width="20" height="20" aria-hidden="true"><use href="#icon-close"></use></svg>';
  };
  menuToggle.addEventListener('click', () => {
    mobileNav.classList.contains('is-open') ? closeMenu() : openMenu();
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
}

const reviewItems = document.querySelectorAll('.review-item');
reviewItems.forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      reviewItems.forEach(other => { if (other !== item) other.open = false; });
    }
  });
});
