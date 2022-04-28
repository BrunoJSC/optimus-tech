const btnMobile = document.getElementById('btn-mobile');
const btnDark = document.getElementById('dark');

function toggleMenu(e) {
  if (e.type === 'touchstart') e.preventDefault();
  const nav = document.getElementById('nav');

  nav.classList.toggle('active');
}

function toggleDark() {
  const dark = document.body;
  dark.classList.toggle('dark-mode');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
btnDark.addEventListener('click', () => {
  toggleDark();
});

