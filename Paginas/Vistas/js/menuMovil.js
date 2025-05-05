document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad del botón de menú
    const menuToggle = document.querySelector('.menu-toggle');
    const menuPrincipal = document.querySelector('.menu-principal');
    const body = document.body;
  
    if (menuToggle) {
      menuToggle.addEventListener('click', function() {
        menuPrincipal.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Cambiar aria-expanded para accesibilidad
        const expanded = menuPrincipal.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', expanded);
      });
    }
  
    // Funcionalidad de submenús para móvil
    const menuDesplegables = document.querySelectorAll('.menu-desplegable');
    
    menuDesplegables.forEach(item => {
      const link = item.querySelector('a');
      
      if (link) {
        link.addEventListener('click', function(e) {
          // Solo prevenir el comportamiento predeterminado en vista móvil
          // y solo si el elemento tiene un submenú
          if (window.innerWidth <= 991 && item.querySelector('.submenu')) {
            e.preventDefault();
            item.classList.toggle('active');
          }
        });
      }
    });
  
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
      if (menuPrincipal && menuPrincipal.classList.contains('active') && 
          !menuPrincipal.contains(e.target) && 
          e.target !== menuToggle && 
          !menuToggle.contains(e.target)) {
        menuPrincipal.classList.remove('active');
        body.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  
    // Funcionalidad del botón de búsqueda
    const searchToggle = document.querySelector('.search-toggle');
    const barraBusqueda = document.querySelector('.barra-busqueda');
    
    if (searchToggle && barraBusqueda) {
      searchToggle.addEventListener('click', function() {
        barraBusqueda.classList.toggle('show');
      });
    }
  });

  overlay.addEventListener("click", () => {
    menuPrincipal.classList.remove("active")
    body.classList.remove("menu-open")
    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false")
    }
  })
  


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
  
      currentSlide = index
    }
  
    // Event listeners para los botones
    prevButton.addEventListener("click", () => {
      let newIndex = currentSlide - 1
      if (newIndex < 0) newIndex = slides.length - 1
      showSlide(newIndex)
    })
  
    nextButton.addEventListener("click", () => {
      let newIndex = currentSlide + 1
      if (newIndex >= slides.length) newIndex = 0
      showSlide(newIndex)
    })
  
    // Event listeners para los dots
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index)
      })
    })
  
    // Inicializar el carrusel
    showSlide(0)
  })
  