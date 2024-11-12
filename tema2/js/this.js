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

const u1 = new Usuario('Manolito');
alert("Nombre: " + u1.nombre);
u1.saludo();