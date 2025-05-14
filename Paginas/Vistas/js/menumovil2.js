document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuPrincipal = document.querySelector(".menu-principal");
    const overlay = document.querySelector(".overlay");
  
    // Toggle del menú móvil
    menuToggle.addEventListener("click", () => {
      menuPrincipal.classList.toggle("active");
      overlay.classList.toggle("active");
      document.documentElement.classList.toggle("menu-open");
    });
  
    // Cerrar menú cuando se hace clic fuera
    overlay.addEventListener("click", () => {
      menuPrincipal.classList.remove("active");
      overlay.classList.remove("active");
      document.documentElement.classList.remove("menu-open");
    });
  
    // Submenús en móvil (activar al hacer clic)
    const dropdowns = document.querySelectorAll(".menu-desplegable > a");
    dropdowns.forEach(drop => {
      drop.addEventListener("click", (e) => {
        e.preventDefault();
        const parentLi = drop.parentElement;
        parentLi.classList.toggle("active");
      });
    });
  
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
      option.addEventListener("click", () => {
        // Cierra los demás
        options.forEach(opt => {
          if (opt !== option) opt.classList.remove("open");
        });
  
        // Alterna la opción actual
        option.classList.toggle("open");
      });
    });
  
    // Selección de color
    const colorBoxes = document.querySelectorAll(".spec-item .color");
    const selectedBox = document.querySelector(".selected-color-box");
  
    colorBoxes.forEach(color => {
      color.addEventListener("click", () => {
        const bgColor = window.getComputedStyle(color).backgroundColor;
        if (selectedBox) {
          selectedBox.style.backgroundColor = bgColor;
        }
  
        // Remover selección previa
        colorBoxes.forEach(c => c.classList.remove("selected"));
        color.classList.add("selected");
      });
    });
  });
