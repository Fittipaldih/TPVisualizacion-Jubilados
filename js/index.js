/* Animacion para el selector de modo claro - oscuro */
const btnSwitch = document.querySelector('#switch');
// Comprobar si hay un valor almacenado en el LocalStorage para la clase 'dark'
if(localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark');
  btnSwitch.classList.add('active');
}
btnSwitch.addEventListener('click', () => {
  // Alternar la clase 'dark' en el body
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active');
  // Almacenar el valor de la clase 'dark' en el LocalStorage
  if(document.body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'true');
  } else {
    localStorage.setItem('darkMode', 'false');
  }
});

// Deslizamiento automático del carrusel
window.addEventListener('DOMContentLoaded', function () {
  var carousel = document.querySelector('#carrusel-cursos');
  var carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 3000, // Intervalo de tiempo en milisegundos (3 segundos en este caso)
    pause: false // Permite pausar el deslizamiento automático cuando el usuario interactúa con el carrusel
  });
});

