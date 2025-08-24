// // Navbar Fixed
// window.onscroll = function () {
//   const header = document.querySelector('header');
//   const fixedNav = header.offsetTop;

//   if (window.pageYOffset > fixedNav) {
//     header.classList.add('navbar-fixed');
//   }
// };

// Close menu on escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && isMobileMenuOpen) {
    closeMobileMenu();
  }
});

// Hamburger
const hamburger = document.querySelector('#hamburger');
let isMobileMenuOpen = false;

// Mobile menu functions
function openMobileMenu() {
  const overlay = document.getElementById('mobile-menu-overlay');
  const menu = overlay.querySelector('.mobile-menu');
  const backdrop = overlay.querySelector('.backdrop');

  overlay.classList.remove('hidden');

  // Trigger animations
  setTimeout(() => {
    menu.classList.add('open');
    backdrop.classList.add('show');
  }, 10);

  isMobileMenuOpen = true;
}

function closeMobileMenu() {
  const overlay = document.getElementById('mobile-menu-overlay');
  const menu = overlay.querySelector('.mobile-menu');
  const backdrop = overlay.querySelector('.backdrop');

  menu.classList.remove('open');
  backdrop.classList.remove('show');

  setTimeout(() => {
    overlay.classList.add('hidden');
  }, 300);

  isMobileMenuOpen = false;
}

