"use strict";

// key usada en localStorage para almacenar el array de coches
const KEY_COCHES = 'coches'; 

// Esperamos a que se carge el DOM para ejecutar nuestro programa principal
document.addEventListener('DOMContentLoaded', principal);
    
function principal(){   

    // Añadimos evento para gestionar alta de coches
    const $formulario=document.getElementsByTagName('form')[0];
    $formulario.addEventListener('submit',altaCoche);    
    
    // Añadimos evento para eliminar un coche
    const $contenido = document.getElementById('contenido');
    $contenido.addEventListener('click',eliminaCoche);

    // Recuperamos coches de localStorage
    const coches = JSON.parse(localStorage.getItem(KEY_COCHES));
    // La primera vez no existe esa key en localStorage
    if (coches === null || !Array.isArray(coches)) {
        localStorage.setItem(KEY_COCHES,'[]');
        return;
    }
    // Construimos la cadena de LIs con los coches
    let listadoCoches = coches.map(c=>`
        <li data-id="${c.id}">
            ${c.marca} ${c.modelo} 
            <button type="button">Eliminar</button>
        </li>`).join('');
    let plantilla = `<ul>${listadoCoches}</ul>`;
        
    $contenido.innerHTML = plantilla;

/*  // Poblar localStorage con coches de ejemplo
    const $boton=document.getElementsByTagName('button')[0];
    $boton.addEventListener('click',pueblaLocalStorage);
**/
}

/*
function pueblaLocalStorage(){
    const coches = [
        {id: "100", marca: "Seat", modelo: "Panda"},
        {id: "101", marca: "Renault", modelo: "R7"},
        {id: "102", marca: "Skoda", modelo: "Fabia"},
        {id: "1234", marca: "Lamborghini", modelo: "Diablo"},
        {id: "1022", marca: "Opel", modelo: "Corsa"},
        {id: "10", marca: "Ford", modelo: "Fiesta"}
        ];
    localStorage.setItem('coches', JSON.stringify(coches));
}
*/

function eliminaCoche(evento){

    // salida prematura si el target no es un botón
    if (evento.target.tagName!=='BUTTON') return;
    if (evento.target.textContent !== 'Eliminar') return;

    // evento.target.parentElement es el <li>
    // dataset.id hace referencia al atributo html data-id del <li>
    eliminaCocheDeLocalStorage(evento.target.parentElement.dataset.id);

    // eliminamos el coche del DOM
    evento.target.parentElement.remove(); 
}

function eliminaCocheDeLocalStorage(idCoche){
    // obtener coches de localStorage
    const coches = JSON.parse(localStorage.getItem(KEY_COCHES));

    // nos quedamos con un nuevo array sin el coche con id igual a idCoche
    const cochesFiltrados = coches.filter(c=>c.id!==idCoche);

    // actualizamos localStorage con la nueva lista de coches
    localStorage.setItem(KEY_COCHES, JSON.stringify(cochesFiltrados));
}

function altaCoche(evento){
    // bloqueamos la acción por defecto del submit, para permanecer en esta página
    evento.preventDefault();
        
    // ponemos como id el timestamp como cadena
    const coche = {
        id: String(Date.now()),
        marca: evento.target.marca.value,
        modelo: evento.target.modelo.value
    };

    // añadimos coche a localStorage
    const coches = JSON.parse(localStorage.getItem(KEY_COCHES));
    coches.push(coche);
    localStorage.setItem(KEY_COCHES,JSON.stringify(coches))

    // añadimos coche al DOM
    const $contenido = document.getElementById('contenido');
    const nuevoLI = `
        <li data-id="${coche.id}">
            ${coche.marca} ${coche.modelo} 
            <button type="button">Eliminar</button>
        </li>`;
    //      $contenido.firstElementChild es la lista UL
    $contenido.firstElementChild.innerHTML += nuevoLI;
}