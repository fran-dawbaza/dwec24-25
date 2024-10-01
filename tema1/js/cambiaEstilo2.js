"use strict";

const $boton = document.getElementsByTagName('button')[0];
$boton.addEventListener('click',cambiaEstilo);

function cambiaEstilo(){
    const $mytxt = document.getElementById('mytxt');
    $mytxt.style.fontSize = "25px";
    $mytxt.style.color="blue";
}

function suma(a,b){
    if (typeof a != 'number'  || typeof b != 'number'){
        console.error('Los parámetros de la función suma deben ser numéricos');
        return 0;
    }
    else {
        console.log('Los parámetros son correctos');
    }
    return a+b;
}


let sumaTotal = suma(4,7) + suma(-3, +67.456) + suma('4',8);

console.log('La variable sumaTotal es:', sumaTotal);
