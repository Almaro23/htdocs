// Seleccionamos todos los botones de color
const colorOptions = document.querySelectorAll('.color');

// Seleccionamos el contenedor de la imagen del producto
const productImage = document.querySelector('.product-image img');

// Seleccionamos la caja que muestra el color seleccionado
const selectedColorBox = document.querySelector('.selected-color-box');

// Definimos las imágenes que corresponden a cada color
const colorImages = {
    '#ffffff': '../../../imagenes/kira.png',
    '#808080': '../../../imagenes/mir.png',
    '#000000': '../../../imagenes/kira.png',
    '#f0e68c': '../../../imagenes/mir.png',
    '#ffd700': '../../../imagenes/kira.png',
    '#6f4f37': '../../../imagenes/mir.png'
};

// Iteramos sobre cada opción de color
colorOptions.forEach(color => {
    color.addEventListener('click', () => {
        // Obtenemos el color del atributo data-color o del estilo
        const selectedColor=color.dataset.color || color.style.backgroundColor;
        
        // Cambiar el fondo de la caja de color seleccionado
        selectedColorBox.style.backgroundColor = selectedColor;

        // Buscar la imagen correspondiente al color
        // Podemos usar el dataset.color para guardar el código hexadecimal exacto
        const imageUrl = colorImages[color.dataset.color];
        if (imageUrl) {
            productImage.src = imageUrl;
            console.log('Cambiando imagen a:', imageUrl);
        } else {
            console.log('No se encontró imagen para el color:', selectedColor);
        }

        // Efecto visual: Agrandar la caja temporalmente
        selectedColorBox.style.transform = 'scale(1.05)';
        setTimeout(() => {
            selectedColorBox.style.transform = 'scale(1)';
        }, 500);
    });
});


// Iteramos sobre cada opción de color
colorOptions.forEach(color => {
    color.addEventListener('click', () => {
        // Cambiar el fondo de la caja de color seleccionado
        selectedColorBox.style.backgroundColor = color.style.backgroundColor;

        // Cambiar la imagen del producto según el color seleccionado
        const selectedColor = color.style.backgroundColor;
        if (colorImages[selectedColor]) {
            productImage.src = colorImages[selectedColor];
        }

        // Efecto visual: Agrandar la caja temporalmente
        selectedColorBox.style.transform = 'scale(1.05)';
        setTimeout(() => {
            selectedColorBox.style.transform = 'scale(1)';
        }, 500);
    });
});

// Código JavaScript para el carrusel
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slide")
    const dots = document.querySelectorAll(".dot")
    const prevButton = document.querySelector(".carousel-button.prev")
    const nextButton = document.querySelector(".carousel-button.next")
    let currentSlide = 0
  
    // Función para mostrar un slide específico
    function showSlide(index) {
      // Ocultar todos los slides
      slides.forEach((slide) => {
        slide.classList.remove("active")
      })
  
      // Desactivar todos los dots
      dots.forEach((dot) => {
        dot.classList.remove("active")
      })
  
      // Mostrar el slide actual
      slides[index].classList.add("active")
      dots[index].classList.add("active")
  
      // Actualizar el índice actual
      currentSlide = index
    }
  
    // Event listeners para los botones
    prevButton.addEventListener("click", () => {
      let newIndex = currentSlide - 1
      if (newIndex < 0) {
        newIndex = slides.length - 1
      }
      showSlide(newIndex)
    })
  
    nextButton.addEventListener("click", () => {
      let newIndex = currentSlide + 1
      if (newIndex >= slides.length) {
        newIndex = 0
      }
      showSlide(newIndex)
    })
  
    // Event listeners para los dots
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index)
      })
    })
  
    // Iniciar el carrusel
    showSlide(0)
  
    // Opcional: Autoplay
    /*
      setInterval(function() {
          let newIndex = currentSlide + 1;
          if (newIndex >= slides.length) {
              newIndex = 0;
          }
          showSlide(newIndex);
      }, 5000); // Cambiar slide cada 5 segundos
      */
  })
  