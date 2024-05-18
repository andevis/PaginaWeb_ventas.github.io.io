// Selección de imagen
const images = document.querySelectorAll('.small-images figure img');
const modalImg = document.getElementById('box-imagen');

function seleccionar(index) {
  modalImg.src = images[index].src;
}

images.forEach((img, index) => {
  img.addEventListener('click', () => seleccionar(index));
});

// Toggle menú de navegación en móvil
const menuIcon = document.querySelector('.menu-icon');
const navbarMenu = document.querySelector('.navbar-menu');

function toggleMenu() {
  navbarMenu.classList.toggle('active');
}

menuIcon.addEventListener('click', toggleMenu);
