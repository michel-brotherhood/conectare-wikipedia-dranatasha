/* Wiki Dra. Natasha Slhessarenko — interações leves */

/* Active nav link conforme o scroll (header + índice lateral) */
const sections = document.querySelectorAll('main[id], section[id]');
const navLinks = document.querySelectorAll('.site-nav a');
const sideIndex = document.querySelector('.side-index');
const sideIndexLinks = sideIndex ? sideIndex.querySelectorAll('a') : [];
const backToTop = document.querySelector('.back-to-top');
const heroEl = document.querySelector('.wiki-header');

function updateActiveLink() {
  let current = sections[0] ? sections[0].id : '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
  sideIndexLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });

  const pastHero = heroEl ? window.scrollY > heroEl.offsetTop + heroEl.offsetHeight : window.scrollY > 400;
  if (sideIndex) sideIndex.classList.toggle('visible', pastHero);
  if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 600);
}
window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* Scroll fade-in (Intersection Observer) */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* Stagger children of grids */
document.querySelectorAll('.cards-grid, .prioridades-grid').forEach(grid => {
  Array.from(grid.children).forEach((child, i) => {
    child.style.transitionDelay = `${i * 80}ms`;
  });
});
