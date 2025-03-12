document.addEventListener('DOMContentLoaded',pueblaTabla);

let usuarios;
let tareas;

function pueblaTabla(){
    fetch('https://jsonplaceholder.typicode.com/users/')
        .then(respuesta=>{
            if (respuesta.ok)
                    return respuesta.json();
            else
                    throw new Error('No encontrado');
}       )
        .then(console.dir)
        .catch(console.log);
}