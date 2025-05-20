function changeImage(color) {
    var image = document.getElementById('color-image');
    var colorName = document.getElementById('color-name');
    
    // Crear el elemento para el nombre del color si no existe
    if (!colorName) {
        colorName = document.createElement('div');
        colorName.id = 'color-name';
        colorName.style.textAlign = 'center';
        colorName.style.marginTop = '10px';
        colorName.style.fontWeight = 'bold';
        image.parentNode.insertBefore(colorName, image.nextSibling);
    }

    switch (color) {
        case 'blanco':
            image.src = '../../../imagenes/Miriam/blanco.jpg';
            colorName.textContent = 'Antracita';
            break;
        case 'antracita':
            image.src = '../../../imagenes/Miriam/antracita.jpg';
            colorName.textContent = 'Antracita';
            break;
        case 'arena':
            image.src = '../../../imagenes/Miriam/arena.jpg';
            colorName.textContent = 'Arena';
            break;
        case 'beige':
            image.src = '../../../imagenes/Miriam/beige.jpg';
            colorName.textContent = 'Beige';
            break;
        case 'chocolate':
            image.src = '../../../imagenes/Miriam/chocolate.jpg';
            colorName.textContent = 'Chocolate';
            break;
        case 'coral':
            image.src = '../../../imagenes/Miriam/coral.jpg';
            colorName.textContent = 'Coral';
            break;
        case 'crema':
            image.src = '../../../imagenes/Miriam/crema.jpg';
            colorName.textContent = 'Crema';
            break;
        case 'gris':
            image.src = '../../../imagenes/Miriam/gris.jpg';
            colorName.textContent = 'Gris';
            break;
        case 'gris7030':
            image.src = '../../../imagenes/Miriam/gris7030.jpg';
            colorName.textContent = 'Gris 70/30';
            break;
        case 'grismedio':
            image.src = '../../../imagenes/Miriam/grismedio.jpg';
            colorName.textContent = 'Gris Medio';
            break;
        case 'moka':
            image.src = '../../../imagenes/Miriam/moka.jpg';
            colorName.textContent = 'Moka';
            break;
        case 'negro':
            image.src = '../../../imagenes/Miriam/negro.jpg';
            colorName.textContent = 'Negro';
            break;
        case 'oceano':
            image.src = '../../../imagenes/Miriam/oceano.jpg';
            colorName.textContent = 'Océano';
            break;
        case 'oliva':
            image.src = '../../../imagenes/Miriam/oliva.jpg';
            colorName.textContent = 'Oliva';
            break;
        case 'rosa':
            image.src = '../../../imagenes/Miriam/rosa.jpg';
            colorName.textContent = 'Rosa';
            break;
        case 'terracota':
            image.src = '../../../imagenes/Miriam/terracota.jpg';
            colorName.textContent = 'Terracota';
            break;
        case 'topo':
            image.src = '../../../imagenes/Miriam/topo.jpg';
            colorName.textContent = 'Topo';
            break;
        case 'turquesa':
            image.src = '../../../imagenes/Miriam/turquesa.jpg';
            colorName.textContent = 'Turquesa';
            break;
        default:
            image.src = '../../../imagenes/Miriam/default.jpg';
            colorName.textContent = 'Color no disponible';
            break;
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.swiper-slide img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt || 'Imagen ampliada';
        });
    });
});

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}


    function closeLightbox() {
        document.getElementById('lightbox').style.display = 'none';
    }
document.querySelector('.lightbox').classList.add('active');

document.querySelector('.lightbox').classList.remove('active');
function changeImage(color) {
    const colorNames = {
        blanco: "Blanco RAL 9003",
        antracita: "Antracita RAL 7011",
        gris: "Gris Perla RAL 7035",
        negro: "Negro RAL 9005",
        arena: "Arena"
    };

    // Muestra el nombre del color en el div
    document.getElementById('selectedColor').textContent = `${colorNames[color]}`;
}

    const botonSubir = document.getElementById("botonSubir");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollTop / alturaTotal >= 0.1) {
      botonSubir.style.display = "block";
    } else {
      botonSubir.style.display = "none";
    }
  });

  botonSubir.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

