// Función para mostrar el formulario correspondiente
function mostrarFormulario(formularioId) {
    // Ocultar ambos formularios primero
    document.getElementById('formulario-whatsapp').classList.remove('activo');
    document.getElementById('formulario-correo').classList.remove('activo');

    // Mostrar el formulario correspondiente
    document.getElementById(formularioId).classList.add('activo');
}

// Generar enlace de WhatsApp dinámicamente
document.getElementById('formContactoWhatsApp').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    let mensaje = document.getElementById('mensaje-whatsapp').value;
    let numero = "524491234567"; // Aquí va el número de WhatsApp del conjunto
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
});