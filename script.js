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
  menuToggle.addEventListener('click', event => {
    event.stopPropagation();
    mobileNav.classList.contains('is-open') ? closeMenu() : openMenu();
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('click', event => {
    if (mobileNav.classList.contains('is-open') && !mobileNav.contains(event.target)) closeMenu();
  });
}

const navDropdown = document.querySelector('.nav-dropdown');
if (navDropdown) {
  navDropdown.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { navDropdown.open = false; }));
  navDropdown.querySelector('[data-nav-dropdown-close]')?.addEventListener('click', () => { navDropdown.open = false; });
  document.addEventListener('click', event => {
    if (navDropdown.open && !navDropdown.contains(event.target)) navDropdown.open = false;
  });
}

const reviewItems = document.querySelectorAll('.review-item');
reviewItems.forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      reviewItems.forEach(other => { if (other !== item) other.open = false; });
    }
  });
});
