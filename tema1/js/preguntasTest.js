"use strict";


document.getElementById('cuestionario').addEventListener('click', corrijeCuestionario);

function corrijeCuestionario(evento){
    if (evento.target.tagName !== 'BUTTON') return;

    if (evento.target.id.match('acierto')) {
        const id = 'pregunta' + evento.target.id.split('acierto')[1];
        ponVerde(id);
    }
    else if (evento.target.id.match('fallo')) {
        const id = 'pregunta' + evento.target.id.split('fallo')[1];
        ponRojo(id);        
    }
    return;
}


function ponVerde(id){
    document.getElementById(id).style.color='green';
}

function ponRojo(id){
    document.getElementById(id).style.color='red';
}



