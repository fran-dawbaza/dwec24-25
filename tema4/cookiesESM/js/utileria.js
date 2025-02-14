import {traducciones} from './traducciones.js';

// Gestión de cookies

/*
getCookie es necesaria en ponModo, que se ejecuta en la cabecera,
entonces no puede ir su declaración en un módulo

function getCookie(name) {
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

/*
Ya no es necesaria programaTraducciones, puesto que traduceContenido 
se invoca dentro de main.js que va en diferido por ser un módulo

function programaTraducciones() {
    // Esperamos a la carga del DOM
    document.addEventListener('DOMContentLoaded',traduceContenido);
}*/