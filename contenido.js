function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => sec.classList.remove('activa'));
    document.getElementById(id).classList.add('activa');
}

function enviarFormulario(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    
    if (nombre && correo) {
        alert(`¡Gracias por contactarnos, ${nombre}! Te responderemos pronto a ${correo}.`);
        document.querySelector('form').reset();
    } else {
        alert('Por favor completa todos los campos.');
    }
}
