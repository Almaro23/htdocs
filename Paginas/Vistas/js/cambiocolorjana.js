// Seleccionamos todos los botones de color
const colorOptions = document.querySelectorAll('.color');

// Seleccionamos el contenedor de la imagen del producto
const productImage = document.querySelector('.product-image img');

// Seleccionamos la caja que muestra el color seleccionado
const selectedColorBox = document.querySelector('.selected-color-box');

const colorImages = {
    '#ffffff': '../../../imagenes/kira.png',
    '#808080': '../../../imagenes/mir.png',
    '#000000': '../../../imagenes/kira.png',
    '#f0e68c': '../../../imagenes/mir.png',
    '#ffd700': '../../../imagenes/kira.png',
    '#6f4f37': '../../../imagenes/mir.png'
};

colorOptions.forEach(color => {
    color.addEventListener('click', () => {
        const selectedColor=color.dataset.color || color.style.backgroundColor;
        
        selectedColorBox.style.backgroundColor = selectedColor;

      
        const imageUrl = colorImages[color.dataset.color];
        if (imageUrl) {
            productImage.src = imageUrl;
            console.log('Cambiando imagen a:', imageUrl);
        } else {
            console.log('No se encontró imagen para el color:', selectedColor);
        }

        selectedColorBox.style.transform = 'scale(1.05)';
        setTimeout(() => {
            selectedColorBox.style.transform = 'scale(1)';
        }, 500);
    });
});


// Iteramos sobre cada opción de color
colorOptions.forEach(color => {
    color.addEventListener('click', () => {
        selectedColorBox.style.backgroundColor = color.style.backgroundColor;

        const selectedColor = color.style.backgroundColor;
        if (colorImages[selectedColor]) {
            productImage.src = colorImages[selectedColor];
        }

        selectedColorBox.style.transform = 'scale(1.05)';
        setTimeout(() => {
            selectedColorBox.style.transform = 'scale(1)';
        }, 500);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slide")
    const dots = document.querySelectorAll(".dot")
    const prevButton = document.querySelector(".carousel-button.prev")
    const nextButton = document.querySelector(".carousel-button.next")
    let currentSlide = 0
  
    function showSlide(index) {
      slides.forEach((slide) => {
        slide.classList.remove("active")
      })
  
      dots.forEach((dot) => {
        dot.classList.remove("active")
      })
  
      slides[index].classList.add("active")
      dots[index].classList.add("active")
  
      currentSlide = index
    }
  
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
  

  function changeImage(color) {
    const colorNames = {
        blanco: "Blanco RAL 9003",
        antracita: "Antracita RAL 7011",
        gris: "Gris Perla RAL 7035",
        negro: "Negro RAL 9005",
        arena: "Arena"
    };

    // Muestra el nombre del color en el div
    document.getElementById('selectedColor').textContent = ` ${colorNames[color]}`;
}