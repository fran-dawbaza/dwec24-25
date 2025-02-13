"use strict";

// Gestión de cookies
function getCookie(name) {
    const cookie = document.cookie
                    .split('; ')
                    .find(row => row.startsWith(name + '='))
                    ?.split('=')[1];
    return cookie ? decodeURIComponent(cookie):null;
}

function chequeaCookies() {
    // Solo redirigir si NO estamos en config.html
    if (!location.pathname.endsWith('config.html')) {
        if (!getCookie('modo') || !getCookie('idioma')) {
            location.href = 'config.html';
        }
    }
}

// Aplicar modo claro u oscuro
function ponModo() {
    const modo = getCookie('modo') ?? 'claro';
    document.documentElement.className = modo;
}

// Sistema de traducciones
function traduceContenido() {   
    const idioma = getCookie('idioma') ?? 'es';
    const elementosATraducir = Array.from(document.querySelectorAll('[data-traduce]'));
    elementosATraducir.forEach(el => {
        const key = el.dataset.traduce;
        el.textContent = traducciones[idioma][key];
    });
}


function programaTraducciones() {
    // Esperamos a la carga del DOM
    document.addEventListener('DOMContentLoaded',traduceContenido);
}