const items = document.querySelectorAll('.carrusel_item');
    let currentIndex = 0; // Índice del elemento actualmente visible

    function showItem(index) {
        // Oculta todos los elementos
        items.forEach(item => item.style.display = 'none');
        // Muestra el elemento activo
        items[index].style.display = 'flex';
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length; // Incrementa el índice y vuelve al inicio
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + items.length) % items.length; // Decrementa el índice y vuelve al final si es necesario
        showItem(currentIndex);
    }

    // Asocia funciones a los botones
    document.querySelector('.carrusel_button--right').addEventListener('click', nextItem);
    document.querySelector('.carrusel_button--left').addEventListener('click', prevItem);
    document.addEventListener("DOMContentLoaded", function() {
        // Asegúrate de que solo el primer elemento sea visible
        showItem(currentIndex);
    });