
document.addEventListener('DOMContentLoaded', principal);
    
    // Función que se ejecuta al cargar los elementos de la página
    function principal(){
        const $boton=document.getElementsByTagName('button')[0];
        $boton.addEventListener('click',pueblaLocalStorage);

        // Mostramos el contenido de localStorage
        const $contenido = document.getElementById('contenido');
        $contenido.addEventListener('click',eliminaCoche);
        const coches = JSON.parse(localStorage.getItem('coches'));
        let listadoCoches = coches.map(c=>`<li data-id="${c.id}">${c.marca} ${c.modelo} <button type="button">Eliminar</button><button type="button">Cancelar</button></li>`).join('');
        let plantilla = `<ul>${listadoCoches}</ul>`;
        
        $contenido.innerHTML = plantilla;
    
    }

    function pueblaLocalStorage(){
        const coches = [
            {id: 100, marca: "Seat", modelo: "Panda"},
            {id: 101, marca: "Renault", modelo: "R7"},
            {id: 102, marca: "Skoda", modelo: "Fabia"},
            {id: 1234, marca: "Lamborghini", modelo: "Diablo"},
            {id: 1022, marca: "Opel", modelo: "Corsa"},
            {id: 10, marca: "Ford", modelo: "Fiesta"}
            ];
        localStorage.setItem('coches', JSON.stringify(coches));
    }

    function eliminaCoche(evento){
        console.log(evento.target.tagName);
        if (evento.target.tagName!=='BUTTON' || evento.target.textContent !== 'Eliminar') return;

        //console.log(evento.target.parentElement); //<li>
        eliminaCocheDeLocalStorage(evento.target.parentElement.dataset.id); 
        evento.target.parentElement.remove(); // eliminamos el coche del DOM
    }

    function eliminaCocheDeLocalStorage(idCoche){
        // obtener coches de localStorage
        const coches = JSON.parse(localStorage.getItem('coches'));
        console.log(coches);
        // nos quedamos con un nuevo array sin el coche con id igual a idCoche
        const cochesFiltrado = coches.filter(c=>c.id!==idCoche);
        console.log(cochesFiltrado);

        // actualizamos localStorage con la nueva lista de coches

        localStorage.setItem('coches',JSON.stringify(cochesFiltrado));
    }