const coches = [
{marca: "Seat", modelo: "Panda"},
{marca: "Renault", modelo: "R7"},
{marca: "Skoda", modelo: "Fabia"},
{marca: "Lamborghini", modelo: "Diablo"},
{marca: "Opel", modelo: "Corsa"},
{marca: "Ford", modelo: "Fiesta"}
];

/*
Vamos a mostrar en la página el contenido de "coches"
*/

document.addEventListener('DOMContentLoaded', principal);

// Función que se ejecuta al cargar los elementos de la página
function principal(){
    const $contenido = document.getElementById('contenido');
    /*
    let listadoCoches ='';
    for (let coche of coches){
        listadoCoches += `<li>${coche.marca} ${coche.modelo}</li>`;
    }

    let plantilla = `<ul>${listadoCoches}</ul>`;
    */
    let listadoCoches = coches.map(c=>`<li>${c.marca} ${c.modelo}</li>`).join('');
    let plantilla = `<ul>${listadoCoches}</ul>`;
    
    $contenido.innerHTML = plantilla;

}