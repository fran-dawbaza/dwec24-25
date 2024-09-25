"use strict";

const $imagen = document.getElementById('myFPImage');
const $parrafo = document.getElementsByTagName('p')[0];

$imagen.addEventListener('click',cambiaPic);
$parrafo.addEventListener('click',cambiaPic);

function cambiaPic(){
    //const $imagen = document.getElementById('myFPImage');
    if ($imagen.src.match('cuidadosparamascotas')){
        $imagen.src = 'https://cdn.prod.website-files.com/63634f4a7b868a399577cf37/63b5ec58f362116e0f5bced1_como%20saber%20el%20sexo%20de%20un%20gatito.jpg';
    }
    else {
        $imagen.src='https://cuidadosparamascotas.com/wp-content/uploads/2019/09/gatitos-importancia-vitaminas.jpg';
    }
}