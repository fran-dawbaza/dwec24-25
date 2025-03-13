document.addEventListener('DOMContentLoaded',pueblaTablaAwait);

let usuarios;
let tareas;
let itemsPorPagina = 5;
let ULpaginacion;
//let paginaActual = 1;
let paginas;
/*
function obtenJSON(url,opciones){
        return (fetch(url,opciones)
                .then(respuesta=>{
                        if (respuesta.ok)
                                return respuesta.json();
                        else
                                throw new Error('No encontrado');
                }));
}

function pueblaTabla(){
        obtenJSON('https://jsonplaceholder.typicode.com/users/')
        .then(users=>{
                usuarios=users;
                return obtenJSON('https://jsonplaceholder.typicode.com/todos/');
        })
        .then (todos=>{
                tareas = todos;
                const cuerpoTabla=document.getElementById('cuerpo-tabla');
                cuerpoTabla.innerHTML = tareas.map(t=>`
                <tr>
                        <td>${t.id}</td>
                        <td>${usuarios.find(u=>u.id==t.userId)?.name }</td>
                        <td>${t.title}</td>
                        <td>
                        <input type="checkbox" ${t.completed?'checked':''} inert/>
                        </td>
                </tr>`).join(''); 
        })
        .catch(console.log);
}
*/
async function pueblaTablaAwait(){
        try {
                usuarios = await obtenJSONAwait('https://jsonplaceholder.typicode.com/users/');
                tareas = await obtenJSONAwait('https://jsonplaceholder.typicode.com/todos/');

                ULpaginacion = document.getElementById('paginacion');
                ULpaginacion.addEventListener('click',actualizaPagina);

                muestraPagina(1);
        }
        catch(error){
                console.log(error);
        }     
}


async function obtenJSONAwait(url,opciones){
        const respuesta = await fetch(url,opciones);
        if (respuesta.ok)
                return await respuesta.json();
        else                        
                throw new Error('No encontrado');
}

function muestraPagina(pagina){
        paginas = Math.ceil(tareas.length/itemsPorPagina);

        const tareasAmostrar = tareas.slice((pagina-1)*itemsPorPagina,pagina*itemsPorPagina);
                
        const cuerpoTabla=document.getElementById('cuerpo-tabla');
        cuerpoTabla.innerHTML = tareasAmostrar.map(t=>`
        <tr>
                <td>${t.id}</td>
                <td>${usuarios.find(u=>u.id==t.userId)?.name }</td>
                <td>${t.title}</td>
                <td>
                <input type="checkbox" ${t.completed?'checked':''} inert/>
                </td>
        </tr>`).join(''); 

        let pagAnterior='';
        let pagSiguiente='';
        if (pagina>1)
                pagAnterior = `<li class="page-item"><a class="page-link" href="#">${pagina-1}</a></li>`;
        if (pagina<paginas)
                pagSiguiente = `<li class="page-item"><a class="page-link" href="#">${pagina+1}</a></li>`
        
        ULpaginacion.innerHTML = `
        <li class="page-item ${pagina===1?'disabled':''}">
                <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
        ${pagAnterior}
        <li class="page-item active"><a class="page-link" href="#">${pagina}</a></li>
        ${pagSiguiente}
        <li class="page-item ${pagina===paginas?'disabled':''}">
                <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                </a>
        </li>`;
}

function actualizaPagina(evento){
        evento.preventDefault();
        if (!(evento.target.tagName === 'A' || evento.target.tagName === 'SPAN')) return;
        console.dir(evento.target);
        if (evento.target.textContent.trim() === '»')
                muestraPagina(paginas);
        else if (evento.target.textContent.trim() === '«')
                muestraPagina(1);
        else 
                muestraPagina(+evento.target.textContent.trim());
}