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
    event.stopPropagation();  
    barraBusqueda.classList.toggle('show');  
    searchInput.focus();  
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

        option.classList.toggle('open');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil toggle
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    
    const barraNavegacion = document.querySelector('.barra-navegacion');
    const menuPrincipal = document.querySelector('.menu-principal');
    
    if (barraNavegacion && menuPrincipal) {
        barraNavegacion.insertBefore(menuToggle, menuPrincipal);
        
        menuToggle.addEventListener('click', function() {
            menuPrincipal.classList.toggle('active');
            menuToggle.innerHTML = menuPrincipal.classList.contains('active') ? '✕' : '☰';
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(event) {
            if (!menuPrincipal.contains(event.target) && event.target !== menuToggle) {
                menuPrincipal.classList.remove('active');
                menuToggle.innerHTML = '☰';
            }
        });
        
        // Submenús en móvil
        const menuDesplegables = document.querySelectorAll('.menu-desplegable');
        menuDesplegables.forEach(function(item) {
            const link = item.querySelector('a');
            
            // Crear botón de toggle para submenús
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'submenu-toggle';
            toggleBtn.innerHTML = '+';
            toggleBtn.style.cssText = 'background: none; border: none; font-size: 18px; margin-left: 5px; cursor: pointer;';
            
            if (link) {
                link.appendChild(toggleBtn);
                
                toggleBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    item.classList.toggle('active');
                    toggleBtn.innerHTML = item.classList.contains('active') ? '-' : '+';
                });
            }
        });
    }
    
    // Barra de búsqueda toggle
    const searchToggle = document.createElement('button');
    searchToggle.className = 'search-toggle';
    searchToggle.innerHTML = '🔍';
    searchToggle.style.cssText = 'background: none; border: none; font-size: 18px; cursor: pointer; margin-left: 10px;';
    
    const barraBusqueda = document.querySelector('.barra-busqueda');
    
    if (barraBusqueda && barraNavegacion) {
        barraNavegacion.appendChild(searchToggle);
        
        searchToggle.addEventListener('click', function() {
            barraBusqueda.classList.toggle('show');
            if (barraBusqueda.classList.contains('show')) {
                barraBusqueda.querySelector('input').focus();
            }
        });
    }
    
    // Ajustar altura de tarjetas de artículos para uniformidad
    function adjustArticleCardHeight() {
        const cards = document.querySelectorAll('.tarjeta-articulo');
        const titles = document.querySelectorAll('.titulo-articulo');
        
        if (window.innerWidth > 767) {
            // Resetear alturas
            titles.forEach(title => title.style.height = 'auto');
            
            // Encontrar la altura máxima
            let maxHeight = 0;
            titles.forEach(title => {
                const height = title.offsetHeight;
                if (height > maxHeight) {
                    maxHeight = height;
                }
            });
            
            // Aplicar altura uniforme
            titles.forEach(title => title.style.height = maxHeight + 'px');
        } else {
            // En móvil, dejar altura automática
            titles.forEach(title => title.style.height = 'auto');
        }
    }
    
    // Ejecutar al cargar y al cambiar tamaño de ventana
    adjustArticleCardHeight();
    window.addEventListener('resize', adjustArticleCardHeight);
    
    // Efecto parallax para la sección de bienvenida
    const bienvenida = document.querySelector('.bienvenida');
    if (bienvenida) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            if (scrollPosition < window.innerHeight) {
                bienvenida.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
            }
        });
    }
    
    // Animación de aparición al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.caracteristica, .catalogo, .tarjeta-articulo');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Aplicar estilos iniciales para animación
    const elementsToAnimate = document.querySelectorAll('.caracteristica, .catalogo, .tarjeta-articulo');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Ejecutar animación al cargar y al hacer scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});

document.addEventListener("DOMContentLoaded", function() {
    // Elementos del menú
    const menuToggle = document.querySelector('.menu-toggle');
    const menuPrincipal = document.querySelector('.menu-principal');
    const menuItems = document.querySelectorAll('.menu-principal > li.menu-desplegable');
    
    // Toggle para el menú principal
    if (menuToggle && menuPrincipal) {
        menuToggle.addEventListener('click', function() {
            menuPrincipal.classList.toggle('active');
            document.body.classList.toggle('menu-open'); // Para bloquear el scroll cuando el menú está abierto
        });
    }
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (window.innerWidth <= 991) {
                if (e.target === item.querySelector('a') || e.target === item.querySelector('a > *')) {
                    e.preventDefault();
                    // Cerrar todos los otros submenús
                    menuItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    item.classList.toggle('active');
                }
            }
        });
    });
    
    document.addEventListener('click', function(e) {
        if (menuPrincipal && menuPrincipal.classList.contains('active')) {
            if (!menuPrincipal.contains(e.target) && e.target !== menuToggle) {
                menuPrincipal.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        }
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991) {
            if (menuPrincipal && menuPrincipal.classList.contains('active')) {
                menuPrincipal.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
            menuItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const menuPrincipal = document.querySelector(".menu-principal")
  const overlay = document.querySelector(".overlay")
  const body = document.querySelector("html")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      menuPrincipal.classList.toggle("active")
      overlay.classList.toggle("active")
      body.classList.toggle("menu-open")
    })
  }

  if (overlay) {
    overlay.addEventListener("click", () => {
      menuPrincipal.classList.remove("active")
      overlay.classList.remove("active")
      body.classList.remove("menu-open")
    })
  }

  const menuItems = document.querySelectorAll(".menu-principal > li.menu-desplegable")

  menuItems.forEach((item) => {
    const link = item.querySelector("a")

    if (window.innerWidth <= 768) {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        item.classList.toggle("active")
      })
    }
  })

  // Product options toggle
  const options = document.querySelectorAll(".option")

  options.forEach((option) => {
    const title = option.querySelector("h3")

    if (title) {
      title.addEventListener("click", () => {
        options.forEach((opt) => {
          if (opt !== option) {
            opt.classList.remove("open")
          }
        })
        option.classList.toggle("open")
      })
    }
  })
})
