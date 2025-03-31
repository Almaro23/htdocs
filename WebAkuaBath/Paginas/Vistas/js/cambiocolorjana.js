// Seleccionamos todos los botones de color
const colorOptions = document.querySelectorAll('.color');

// Seleccionamos el contenedor de la imagen del producto
const productImage = document.querySelector('.product-image img');

// Seleccionamos la caja que muestra el color seleccionado
const selectedColorBox = document.querySelector('.selected-color-box');

// Definimos las imágenes que corresponden a cada color
const colorImages = {
    '#ffffff': '../../../imagenes/kira.png',
    '#808080': '../../../imagenes/mir.png',
    '#000000': '../../../imagenes/kira-black.png',
    '#f0e68c': '../../../imagenes/kira-yellow-soft.png',
    '#ffd700': '../../../imagenes/kira-yellow-intense.png',
    '#6f4f37': '../../../imagenes/kira-brown.png'
};

// Iteramos sobre cada opción de color
colorOptions.forEach(color => {
    color.addEventListener('click', () => {
        // Obtenemos el color del atributo data-color o del estilo
        const selectedColor=color.dataset.color || color.style.backgroundColor;
        
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
