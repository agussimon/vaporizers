const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

// Toggle menu and overlay
menuIcon.onclick = function (e) {
  e.stopPropagation();  // Prevent click from closing menu
  menu.classList.toggle('active');
  menuIcon.classList.toggle('active');
  overlay.classList.toggle('active');
};

// Close menu when clicking on the overlay or outside the menu
overlay.onclick = function () {
  menu.classList.remove('active');
  menuIcon.classList.remove('active');
  overlay.classList.remove('active');
};

// Close menu when clicking outside the menu
document.addEventListener('click', function (e) {
  if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
    menu.classList.remove('active');
    menuIcon.classList.remove('active');
    overlay.classList.remove('active');
  }
});
