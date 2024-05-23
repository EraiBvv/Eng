// Variable para almacenar el índice de la imagen actual en el carrusel
let slideIndex = 0;

// Función para avanzar o retroceder en las diapositivas del carrusel
function plusSlides(n) {
  // Llama a la función showSlides() con el nuevo índice de la imagen
  showSlides(slideIndex += n);
}

// Función para mostrar una diapositiva específica del carrusel
function showSlides(n) {
  // Obtiene todas las imágenes del carrusel
  const slides = document.querySelectorAll('.carousel-content img');
  
  // Reinicia el índice si llega al final del carrusel
  if (n >= slides.length) { slideIndex = 0; }
  // Reinicia el índice al principio si retrocede desde la primera imagen
  if (n < 0) { slideIndex = slides.length - 1; }

  // Oculta todas las imágenes del carrusel
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Muestra la imagen correspondiente al índice actual
  slides[slideIndex].style.display = "block";  
}

// Función para avanzar automáticamente en el carrusel cada 2 segundos
function autoSlide() {
  // Incrementa el índice de la imagen actual
  slideIndex++;
  // Llama a la función showSlides() con el nuevo índice
  showSlides(slideIndex);
}

// Inicia el avance automático del carrusel cada 2 segundos
setInterval(autoSlide, 2000);
