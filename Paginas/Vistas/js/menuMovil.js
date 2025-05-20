document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuPrincipal = document.querySelector('.menu-principal');
    const body = document.body;
  
    if (menuToggle) {
      menuToggle.addEventListener('click', function() {
        menuPrincipal.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        const expanded = menuPrincipal.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', expanded);
      });
    }
  
    const menuDesplegables = document.querySelectorAll('.menu-desplegable');
    
    menuDesplegables.forEach(item => {
      const link = item.querySelector('a');
      
      if (link) {
        link.addEventListener('click', function(e) {
          if (window.innerWidth <= 991 && item.querySelector('.submenu')) {
            e.preventDefault();
            item.classList.toggle('active');
          }
        });
      }
    });
  
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
  
    showSlide(0)
  })


 