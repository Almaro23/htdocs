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
  