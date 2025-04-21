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
            image.src = '../../../imagenes/Enma/blanco.jpg';
            colorName.textContent = 'Blanco';
            break;
        case 'antracita':
            image.src = '../../../imagenes/Enma/antracita.jpg';
            colorName.textContent = 'Antracita';
            break;
        case 'arena':
            image.src = '../../../imagenes/Enma/arena.jpg';
            colorName.textContent = 'Arena';
            break;
        case 'beige':
            image.src = '../../../imagenes/Enma/beige.jpg';
            colorName.textContent = 'Beige';
            break;
        case 'chocolate':
            image.src = '../../../imagenes/Enma/chocolate.jpg';
            colorName.textContent = 'Chocolate';
            break;
        case 'coral':
            image.src = '../../../imagenes/Enma/coral.jpg';
            colorName.textContent = 'Coral';
            break;
        case 'crema':
            image.src = '../../../imagenes/Enma/crema.jpg';
            colorName.textContent = 'Crema';
            break;
        case 'gris':
            image.src = '../../../imagenes/Enma/gris.jpg';
            colorName.textContent = 'Gris';
            break;
        case 'gris7030':
            image.src = '../../../imagenes/Enma/gris7030.jpg';
            colorName.textContent = 'Gris 70/30';
            break;
        case 'grismedio':
            image.src = '../../../imagenes/Enma/grismedio.jpg';
            colorName.textContent = 'Gris Medio';
            break;
        case 'moka':
            image.src = '../../../imagenes/Enma/moka.jpg';
            colorName.textContent = 'Moka';
            break;
        case 'negro':
            image.src = '../../../imagenes/Enma/negro.jpg';
            colorName.textContent = 'Negro';
            break;
        case 'oceano':
            image.src = '../../../imagenes/Enma/oceano.jpg';
            colorName.textContent = 'Océano';
            break;
        case 'oliva':
            image.src = '../../../imagenes/Enma/oliv.jpg';
            colorName.textContent = 'Oliva';
            break;
        case 'rosa':
            image.src = '../../../imagenes/Enma/rosa.jpg';
            colorName.textContent = 'Rosa';
            break;
        case 'terracota':
            image.src = '../../../imagenes/Enma/terracota.jpg';
            colorName.textContent = 'Terracota';
            break;
        case 'topo':
            image.src = '../../../imagenes/Enma/topo.jpg';
            colorName.textContent = 'Topo';
            break;
        case 'turquesa':
            image.src = '../../../imagenes/Enma/turquesa.jpg';
            colorName.textContent = 'Turquesa';
            break;
        default:
            image.src = '../../../imagenes/Enma/default.jpg';
            colorName.textContent = 'Color no disponible';
            break;
    }
}

document.querySelectorAll('.swiper-slide img').forEach(function(img) {
    img.addEventListener('click', function() {
        var lightbox = document.getElementById('lightbox');
        var lightboxImg = document.getElementById('lightbox-img');
        lightbox.style.display = 'block';
        lightboxImg.src = this.src;
    });
});

// Función para cerrar el lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
// Para abrir el lightbox
document.querySelector('.lightbox').classList.add('active');

// Para cerrar el lightbox
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
    document.getElementById('selectedColor').textContent = `Color seleccionado: ${colorNames[color]}`;
}