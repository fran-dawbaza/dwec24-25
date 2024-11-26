"use strict";

document
    .getElementsByTagName('button')[0]
    .addEventListener('click',sumaNumerosIntroducidos);

let total = 0; //acumulador de la suma

function suma(a,b){
    if (!isFinite(a)){
        muestraError(`El valor ${a} no es un número válido`);
        return 0;
    }
    if (!isFinite(b)){
        muestraError(`El valor ${b} no es un número válido`);
        return 0;
    }
    return +a + +b;
}

function muestraError(mensaje){
    document.getElementById('errores').innerHTML=mensaje;
    console.log(mensaje);
}



function concatena(a1,a2){
    if (!Array.isArray(a1)){
        muestraError(`El valor ${a1} no es un array`);
        return [];
    }
    if (!Array.isArray(a2)){
        muestraError(`El valor ${a2} no es un array`);
        return [];
    }
    
    const aux = [];
    
    for (let valor of a1)
        aux.push(valor);

    for (let valor of a2)
        aux.push(valor);
    
    return aux;
}

function sumaNumerosIntroducidos(){

    let a;
    //do {
    a = document.getElementById('sumando').value;
    console.log(a);
    muestraError('');
    if (isFinite(a)){
        total = suma(a,total);
    }
    else {
        muestraError(`${a} no es un número`);
    }
    actualidaResultado(total);
    //} while (a!==null);
}

function actualidaResultado(resultado){
    document.getElementsByTagName('h2')[0].innerHTML = `Resultado: ${resultado}`;
}


function mySplit(cadena,separador){
    //validamos parámetros, salida prematura
    if (typeof cadena !== 'string')
        return undefined;
    if (typeof separador !== 'string')
        return undefined;

    const arr=[];

    if (separador===''){  //caso especial, salida prematura
        for (let caracter of cadena){
            arr.push(caracter);
        }
        return arr;
    }
    
    let posicionInicial = 0;
    let posicionFinal=0;
   
    while (posicionFinal!=-1) {        
        posicionFinal = cadena.indexOf(separador,posicionInicial);
        if (posicionFinal===-1)
            arr.push(cadena.slice(posicionInicial));
        else    
            arr.push(cadena.slice(posicionInicial,posicionFinal));
        posicionInicial=posicionFinal+separador.length;
    }
    
    return arr;
}
