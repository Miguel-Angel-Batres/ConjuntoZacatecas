const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let index = 0;
let intervalId; 

function showSlide(newIndex) {
    if (newIndex < 0) {
        index = items.length - 1;
    } else if (newIndex >= items.length) {
        index = 0;
    } else {
        index = newIndex;
    }
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function startAutoSlide() {
    intervalId = setInterval(() => {
        showSlide(index + 1);
    }, 5000);
}

startAutoSlide();

prevBtn.addEventListener('click', () => {
    showSlide(index - 1);
    resetInterval(); // Reiniciar el intervalo
});

nextBtn.addEventListener('click', () => {
    showSlide(index + 1);
    resetInterval(); // Reiniciar el intervalo
});

function resetInterval() {
    clearInterval(intervalId); // Detener el intervalo anterior
    startAutoSlide(); // Iniciar un nuevo intervalo
}
