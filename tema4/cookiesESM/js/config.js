//import {getCookie} from './utileria.js';
import {traduceContenido} from './utileria.js';


iniciaConfigForm();
traduceContenido();
programaSubmit();

// Inicia formulario de configuración
function iniciaConfigForm() {
    const modo = getCookie('modo') ?? 'claro';
    const idioma = getCookie('idioma') ?? 'es';
    document.querySelector(`input[name="modo"][value="${modo}"]`).checked = true;
    document.querySelector(`input[name="idioma"][value="${idioma}"]`).checked = true;
}

function programaSubmit() {
    const formu = document.getElementById('formularioConfig');
    formu.addEventListener('submit', evento => {
        evento.preventDefault();
    
        const modo = document.querySelector('input[name="modo"]:checked').value;
        const idioma = document.querySelector('input[name="idioma"]:checked').value;
    
        const expiracion = new Date();
        expiracion.setFullYear(expiracion.getFullYear() + 1);
    
        document.cookie = `modo=${modo}; expires=${expiracion.toUTCString()}; path=/`;
        document.cookie = `idioma=${idioma}; expires=${expiracion.toUTCString()}; path=/`;
    
        location.href = 'index.html';
    });
}