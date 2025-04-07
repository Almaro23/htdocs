document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario de búsqueda
    const searchForm = document.getElementById('search-form');
    
    // Definir los productos y páginas disponibles para buscar
    const contenidoBusqueda = [
        { nombre: 'Plato de Ducha Lucia', url: './Paginas/Vistas/PlatosDeDucha/lucia.html', categoria: 'Platos de Ducha' },
        { nombre: 'Plato de Ducha Miriam', url: './Paginas/Vistas/PlatosDeDucha/mirian.html', categoria: 'Platos de Ducha' },
        { nombre: 'Plato de Ducha Emma', url: './Paginas/Vistas/PlatosDeDucha/emma.html', categoria: 'Platos de Ducha' },
        { nombre: 'Encimera Kuo', url: './Paginas/Vistas/Encimeras/kuo.html', categoria: 'Encimeras' },
        { nombre: 'Encimera Mir', url: './Paginas/Vistas/Encimeras/mio.html', categoria: 'Encimeras' },
        { nombre: 'Encimera Rem', url: './Paginas/Vistas/Encimeras/rem.html', categoria: 'Encimeras' },
        { nombre: 'Encimera Plana', url: './Paginas/Vistas/Encimeras/planayfaldon.html', categoria: 'Encimeras' },
        { nombre: 'Lavabo Kira', url: './Paginas/Vistas/Lavabos/kira.html', categoria: 'Lavabos' },
        { nombre: 'Lavabo Luz', url: './Paginas/Vistas/Lavabos/luz.html', categoria: 'Lavabos' },
        { nombre: 'Lavabo Jana', url: './Paginas/Vistas/Lavabos/jana.html', categoria: 'Lavabos' },
        { nombre: 'Sobre Nosotros', url: './Paginas/Vistas/sobreNosotros.html', categoria: 'Información' },
        { nombre: 'Contacto', url: './Paginas/Vistas/contacto.html', categoria: 'Información' }
    ];

    // Manejar el evento de envío del formulario
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Obtener el valor de búsqueda
        const searchInput = document.getElementById('search-input');
        const terminoBusqueda = searchInput.value.toLowerCase().trim();
    
        // Realizar la búsqueda
        const resultados = buscarContenido(terminoBusqueda);
        
        // Mostrar los resultados
        mostrarResultados(resultados, terminoBusqueda);
    });

    // Función para buscar en el contenido
    function buscarContenido(termino) {
        return contenidoBusqueda.filter(item => {
            return item.nombre.toLowerCase().includes(termino) || 
                   item.categoria.toLowerCase().includes(termino);
        });
    }

    // Función para mostrar los resultados
    function mostrarResultados(resultados, termino) {
        // Eliminar resultados anteriores si existen
        const resultadosAnteriores = document.getElementById('resultados-busqueda');
        if (resultadosAnteriores) {
            resultadosAnteriores.remove();
        }
        
        // Crear contenedor de resultados
        const contenedorResultados = document.createElement('div');
        contenedorResultados.id = 'resultados-busqueda';
        contenedorResultados.className = 'resultados-busqueda';
        
        // Estilos para el contenedor de resultados
        contenedorResultados.style.position = 'absolute';
        contenedorResultados.style.top = '60px';
        contenedorResultados.style.right = '10px';
        contenedorResultados.style.width = '300px';
        contenedorResultados.style.backgroundColor = 'white';
        contenedorResultados.style.boxShadow = '0 4px 8px rgba(94, 0, 0, 0.1)';
        contenedorResultados.style.borderRadius = '5px';
        contenedorResultados.style.padding = '10px';
        contenedorResultados.style.zIndex = '1000';
        
        // Añadir título de resultados
        const titulo = document.createElement('h3');
        titulo.style.borderBottom = '1px solid #ddd';
        titulo.style.paddingBottom = '5px';
        titulo.style.marginBottom = '10px';
        contenedorResultados.appendChild(titulo);
        
        // Añadir botón para cerrar
        const botonCerrar = document.createElement('button');
        botonCerrar.textContent = 'X';
        botonCerrar.style.position = 'absolute';
        botonCerrar.style.top = '10px';
        botonCerrar.style.right = '10px';
        botonCerrar.style.background = 'none';
        botonCerrar.style.border = 'none';
        botonCerrar.style.cursor = 'pointer';
        botonCerrar.style.fontSize = '16px';
        botonCerrar.style.fontWeight = 'bold';
        botonCerrar.addEventListener('click', function() {
            contenedorResultados.remove();
        });
        contenedorResultados.appendChild(botonCerrar);
        
        // Verificar si hay resultados
        if (resultados.length === 0) {
            const noResultados = document.createElement('p');
            noResultados.textContent = 'No se encontraron resultados.';
            noResultados.style.padding = '10px 0';
            contenedorResultados.appendChild(noResultados);
        } else {
            // Agrupar resultados por categoría
            const resultadosPorCategoria = {};
            resultados.forEach(item => {
                if (!resultadosPorCategoria[item.categoria]) {
                    resultadosPorCategoria[item.categoria] = [];
                }
                resultadosPorCategoria[item.categoria].push(item);
            });
            
            // Mostrar resultados agrupados
            for (const categoria in resultadosPorCategoria) {
                const categoriaElement = document.createElement('div');
                categoriaElement.className = 'categoria-resultados';
                
                const categoriaTitulo = document.createElement('h4');
                categoriaTitulo.textContent = categoria;
                categoriaTitulo.style.marginTop = '10px';
                categoriaTitulo.style.marginBottom = '5px';
                categoriaElement.appendChild(categoriaTitulo);
                
                const listaResultados = document.createElement('ul');
                listaResultados.style.listStyle = 'none';
                listaResultados.style.padding = '0';
                listaResultados.style.margin = '0';
                
                resultadosPorCategoria[categoria].forEach(item => {
                    const itemResultado = document.createElement('li');
                    itemResultado.style.padding = '5px 0';
                    
                    const enlace = document.createElement('a');
                    enlace.href = item.url;
                    enlace.textContent = item.nombre;
                    enlace.style.textDecoration = 'none';
                    enlace.style.color = '#0066cc';
                    enlace.style.display = 'block';
                    enlace.style.padding = '5px';
                    enlace.style.borderRadius = '3px';
                    
                    // Efecto hover
                    enlace.addEventListener('mouseover', function() {
                        this.style.backgroundColor = '#f0f0f0';
                    });
                    enlace.addEventListener('mouseout', function() {
                        this.style.backgroundColor = 'transparent';
                    });
                    
                    itemResultado.appendChild(enlace);
                    listaResultados.appendChild(itemResultado);
                });
                
                categoriaElement.appendChild(listaResultados);
                contenedorResultados.appendChild(categoriaElement);
            }
        }
        
        // Añadir el contenedor de resultados al documento
        document.body.appendChild(contenedorResultados);
    }
});