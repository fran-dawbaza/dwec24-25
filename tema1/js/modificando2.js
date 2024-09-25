"use strict";

let i=1;

const $boton = document.getElementsByTagName('button')[0];
const $encabezado = document.getElementById('encabezado');

$boton.addEventListener('click', cambiaContenido);
$encabezado.addEventListener('click', cambiaContenido);

function cambiaContenido() {
    document.getElementById('prueba').innerHTML='CAMBIANDO el contenido ' + ++i;
}