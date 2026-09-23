// Función para abrir el modal con la imagen, la fecha y la descripción
function abrirMedia(imagenSrc, fechaTexto, descripcionTexto) {
    const modal = document.getElementById('mediaModal');
    const modalImg = document.getElementById('modalImg');
    const modalDate = document.getElementById('modalDate');
    const modalDescription = document.getElementById('modalDescription');

    // Asignamos los valores correspondientes
    modalImg.src = imagenSrc;
    modalDate.innerText = fechaTexto;
    modalDescription.innerText = descripcionTexto;

    // Mostramos el modal
    modal.style.display = 'flex';
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById('mediaModal');
    modal.style.display = 'none';
    
    // Limpiamos la imagen para evitar parpadeos al abrir otra
    document.getElementById('modalImg').src = '';
}

// Acciones de los botones del Banner Principal (Hero)
function reproducirTrailer() {
    alert("🎬 Preparando el tráiler oficial de nuestra hermosa historia de amor...");
}

function mostrarInfoSerie() {
    alert("SOFICRIS: Una serie original protagonizada por ustedes dos. Nuevos episodios y temporadas cada mes para recordar los mejores momentos.");
}

// Cerrar el modal si el usuario presiona la tecla ESC
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        cerrarModal();
    }
});