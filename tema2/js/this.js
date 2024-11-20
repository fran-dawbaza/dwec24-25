"use strict";

function saludo(){
    alert('Hola, esto es this:');
    alert(this);
}

const usuario = {
    nombre: 'Pepito',
    f1: saludo
}

//saludo(); // primer caso

// usuario.f1(); // segundo caso 

function Usuario(nombre){ // tercer caso
    //this = {};
    this.nombre = nombre;
    this.saludo = saludo;
    // return this
}

//const u1 = new Usuario('Manolito');
//alert("Nombre: " + u1.nombre);
//u1.saludo();

///

function Accumulator(startingValue){
    this.value=startingValue;
    this.read=function (){
        let numero = +prompt('Dime un número:', 0);
        this.value += numero;
    }
}

let accumulator = new Accumulator(1); // valor inicial 1
let accumulator2 = new Accumulator(100); // valor inicial 100

accumulator.read(); // agrega el valor introducido por el usuario
accumulator2.read(); // agrega el valor introducido por el usuario

alert(accumulator.value); // muestra la suma de estos valores
alert(accumulator2.value); // muestra la suma de estos valores