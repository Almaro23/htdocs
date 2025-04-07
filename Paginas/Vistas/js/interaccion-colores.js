// Seleccionamos todos los botones de color
const colorOptions = document.querySelectorAll('.color');




// Iteramos sobre cada opción de color
colorOptions.forEach(color => {
    color.addEventListener('click', () => {
        // Obtenemos el color del atributo data-color o del estilo
        const selectedColor = color.dataset.color || color.style.backgroundColor;
        
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


//encimeras menus deplegables
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', function() {
        const panel = this.nextElementSibling;
        
        if (panel.style.display === "block") {
            panel.style.display = "none";
            this.classList.remove('active');
        } else {
            panel.style.display = "block";
            this.classList.add('active');
        }
    });
});

//valoraciones en sobre nosotros
//recogemos datos del formulario y los mostramos en la seccion de opiniones
//las valoraciones nuestras see situan arriba de la seccion de opiniones
//juego con if y else para completar los campos y validaciones tipicas

document.getElementById("boton-valoracion").addEventListener("click", function() {
    document.getElementById("formulario-valoracion").style.display = "block";
});

document.getElementById("enviar-valoracion").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value;
    const comentario = document.getElementById("comentario").value;
    const valoracion = document.querySelector('input[name="valoracion"]:checked');

    if (nombre && comentario && valoracion) {
        const nuevaOpinion = document.createElement("div");
        nuevaOpinion.classList.add("opinion");

        const nombreElement = document.createElement("h3");
        nombreElement.textContent = nombre;
        nuevaOpinion.appendChild(nombreElement);

        const comentarioElement = document.createElement("p");
        comentarioElement.textContent = comentario;
        nuevaOpinion.appendChild(comentarioElement);

        const estrellasElement = document.createElement("div");
        estrellasElement.classList.add("estrellas");
        const estrellas = document.createElement("span");
        estrellas.textContent = "⭐".repeat(parseInt(valoracion.value));
        estrellasElement.appendChild(estrellas);
        nuevaOpinion.appendChild(estrellasElement);

        document.getElementById("opiniones").prepend(nuevaOpinion);

        document.getElementById("formulario-valoracion").style.display = "none";
        document.getElementById("nombre").value = "";
        document.getElementById("comentario").value = "";
        document.querySelector('input[name="valoracion"]:checked').checked = false;
    } else {
        alert("Por favor, completa todos los campos.");
    }
});


// .product-image
//imagen durante un segundo aumenta con zoom y luego vuelve a lo original
const productImages = document.querySelectorAll('.product-image');

productImages.forEach(image => {
    image.addEventListener('click', () => {
        image.querySelector('img').style.transform = 'scale(1.2)'; 

        setTimeout(() => {
            image.querySelector('img').style.transform = 'scale(1)'; 
        }, 1000);
    });
});

const swiper = new Swiper('.swiper-container', {
    loop: true, // Opcional: habilitar el loop para que sea un carrusel infinito
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay: 2500, // Tiempo entre cada cambio de imagen (en milisegundos)
        disableOnInteraction: false
    }
});



// Obtener el botón de lupa y la barra de búsqueda
const lupaBtn = document.querySelector('.barra-busqueda button');
const barraBusqueda = document.querySelector('.barra-busqueda');
const searchInput = document.querySelector('#search-input');

// Mostrar la barra de búsqueda cuando se hace clic en la lupa
lupaBtn.addEventListener('click', function(event) {
    event.stopPropagation();  // Evitar que el clic se propague
    barraBusqueda.classList.toggle('show');  // Alternar visibilidad
    searchInput.focus();  // Focalizar el campo de texto
});

// Cerrar la barra de búsqueda si se hace clic fuera de ella
document.addEventListener('click', function(event) {
    if (!barraBusqueda.contains(event.target) && !lupaBtn.contains(event.target)) {
        barraBusqueda.classList.remove('show');  // Ocultar barra de búsqueda
    }
});


document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => {
        // Cerrar todos los otros paneles
        document.querySelectorAll('.option').forEach(otherOption => {
            if (otherOption !== option) {
                otherOption.classList.remove('open');
            }
        });

        // Alternar la clase "open" en la opción clicada
        option.classList.toggle('open');
    });
});
