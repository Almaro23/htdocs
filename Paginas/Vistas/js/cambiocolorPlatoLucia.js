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
            image.src = '../../../imagenes/Lucia/blanco1.jpg';
            colorName.textContent = 'Blanco';
            break;
        case 'gris7030':
            image.src = '../../../imagenes/Lucia/gris7035.jpg';
            colorName.textContent = 'Gris 70/30';
            break;
        case 'gris':
            image.src = '../../../imagenes/Lucia/gris1.jpg';
            colorName.textContent = 'Gris';
            break;
        case 'grismedio':
            image.src = '../../../imagenes/Lucia/grismedio.jpg';
            colorName.textContent = 'Gris Medio';
            break;
        case 'antracita':
            image.src = '../../../imagenes/Lucia/antracita.jpg';
            colorName.textContent = 'Antracita';
            break;
        case 'negro':
            image.src = '../../../imagenes/Lucia/negro.jpg';
            colorName.textContent = 'Negro';
            break;
        case 'crema':
            image.src = '../../../imagenes/Lucia/crema.jpg';
            colorName.textContent = 'Crema';
            break;
        case 'beige':
            image.src = '../../../imagenes/Lucia/beige.jpg';
            colorName.textContent = 'Beige';
            break;
        case 'arena':
            image.src = '../../../imagenes/Lucia/arena.jpg';
            colorName.textContent = 'Arena';
            break;
        case 'moka':
            image.src = '../../../imagenes/Lucia/moka.jpg';
            colorName.textContent = 'Moka';
            break;
        case 'topo':
            image.src = '../../../imagenes/Lucia/topo.jpg';
            colorName.textContent = 'Topo';
            break;
        case 'chocolate':
            image.src = '../../../imagenes/Lucia/chocolate.jpg';
            colorName.textContent = 'Chocolate';
            break;
        case 'terracota':
            image.src = '../../../imagenes/Lucia/terracota.jpg';
            colorName.textContent = 'Terracota';
            break;
        case 'coral':
            image.src = '../../../imagenes/Lucia/coral.jpg';
            colorName.textContent = 'Coral';
            break;
        case 'rosa':
            image.src = '../../../imagenes/Lucia/rosa.jpg';
            colorName.textContent = 'Rosa';
            break;
        case 'turquesa':
            image.src = '../../../imagenes/Lucia/turquesa.jpg';
            colorName.textContent = 'Turquesa';
            break;
        case 'oceano':
            image.src = '../../../imagenes/Lucia/oceano.jpg';
            colorName.textContent = 'Océano';
            break;
        case 'oliva':
            image.src = '../../../imagenes/Lucia/oliva.jpg';
            colorName.textContent = 'Oliva';
            break;
        default:
            image.src = '../../../imagenes/Lucia/default.jpg';
            colorName.textContent = 'Color no disponible';
            break;
    }
}
