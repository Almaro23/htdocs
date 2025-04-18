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