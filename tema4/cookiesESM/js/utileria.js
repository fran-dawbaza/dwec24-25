import {traducciones} from './traducciones.js';

// Gestión de cookies
/*export function getCookie(name) {
    const cookie = document.cookie
                    .split('; ')
                    .find(row => row.startsWith(name + '='))
                    ?.split('=')[1];
    return cookie ? decodeURIComponent(cookie):null;
}*/

export function chequeaCookies() {
    // Solo redirigir si NO estamos en config.html
    if (!location.pathname.endsWith('config.html')) {
        if (!getCookie('modo') || !getCookie('idioma')) {
            location.href = 'config.html';
        }
    }
}


// Sistema de traducciones
export function traduceContenido() {   
    const idioma = getCookie('idioma') ?? 'es';
    const elementosATraducir = Array.from(document.querySelectorAll('[data-traduce]'));
    elementosATraducir.forEach(el => {
        const key = el.dataset.traduce;
        el.textContent = traducciones[idioma][key];
    });
}


export function programaTraducciones() {
    // Esperamos a la carga del DOM
    document.addEventListener('DOMContentLoaded',traduceContenido);
}