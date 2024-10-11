function mostrarSeccion(seccion) {
    // Ocultar todas las secciones
    document.querySelectorAll('.seccion').forEach((elemento) => elemento.classList.add('oculto'));

    // Remover la clase "activo" de todos los botones
    document.querySelectorAll('.btn').forEach((boton) => boton.classList.remove('activo'));

    // Mostrar la sección seleccionada
    document.getElementById(seccion).classList.remove('oculto');

    // Añadir la clase "activo" al botón correspondiente
    if (seccion === 'videos') {
        document.querySelector('.btnVideos').classList.add('activo');
    } else if (seccion === 'fotos') {
        document.querySelector('.btnFotos').classList.add('activo');
    }
}
