const $iniciar = document.getElementById('btnIniciar');
const $tablero = document.getElementById('tablero');
const $mensajes = document.getElementById('mensajes');


let intentos, cartasVolteadas, temporizador;

$iniciar.addEventListener('click', iniciarJuego);
$tablero.addEventListener('click', manejaClickEnTablero);

function iniciarJuego() {
    $tablero.innerHTML = '';
    $mensajes.textContent = '';
    intentos = 0;
    cartasVolteadas = [];
    actualizarTemporizador(0);
    actualizarIntentos();

    const $dificultad = document.getElementById('selectDificultad');
    const $tipo = document.getElementById('selectTipo');


    let dimensiones = parseInt($dificultad.value);
    let tipoJuego = $tipo.value;
    $tablero.style.gridTemplateColumns = `repeat(${dimensiones}, 100px)`;

    const totalCartas = dimensiones * dimensiones;
    const totalPares = Math.floor(totalCartas / 2);
    let valores;

    if (tipoJuego === 'numeros') {
        valores = Array.from({ length: totalPares }, (_, i) => i + 1);
    } else {
        valores = generarImagenes(tipoJuego, totalPares);
    }

    const mazo = [...valores, ...valores].slice(0, totalCartas);
    mazo.sort(() => Math.random() - 0.5);

    $tablero.innerHTML = mazo.map(valor=>`
        <div class="carta" data-valor="${valor}">
            ${tipoJuego==='numeros'?
                `<span>${valor}</span>`:
                `<img src="${valor}"/>`
            }
        </div>`).join('');

    if (temporizador)
        clearInterval(temporizador);

    let tiempo = 0;
    temporizador = setInterval(() => {
        tiempo++;
        actualizarTemporizador(tiempo);
    }, 1000);
}



function generarImagenes(categoria, cantidad) {
    const urls = [];
    const comienzo = 1 + Math.floor(200*Math.random());
    for (let i = 1; i <= cantidad; i++) {
        urls.push(`https://loremflickr.com/100/100/${categoria}?lock=${i+comienzo}`);
    }
    return urls;
}

function actualizarTemporizador(tiempo) {
    const $tiempo = document.getElementById('tiempo');
    $tiempo.textContent = tiempo;
}

function actualizarIntentos() {
    intentos++;
    const $intentos = document.getElementById('intentos');
    $intentos.textContent = intentos;
}


function manejaClickEnTablero(evento){
    console.log(evento.target);

    const $carta = evento.target.closest('.carta');

    if (!$carta || $carta.classList.contains('volteada') || cartasVolteadas.length === 2) {
        return;
    }

    $carta.classList.add('volteada');
    cartasVolteadas.push($carta);

    if (cartasVolteadas.length === 2) {
        actualizarIntentos();
        comprobarPareja();
    }
}



function comprobarPareja() {
    const [carta1, carta2] = cartasVolteadas;

    if (carta1.dataset.valor === carta2.dataset.valor) {
        carta1.classList.add('emparejada');
        carta2.classList.add('emparejada');
        cartasVolteadas = [];

        if (document.getElementsByClassName('volteada').length === document.getElementsByClassName('carta').length){
            clearInterval(temporizador);
            $mensajes.textContent = `¡Felicidades! Terminaste en ${tiempo} segundos.`;
        }
    } else {
        setTimeout(() => {
            carta1.classList.remove('volteada');
            carta2.classList.remove('volteada');
            cartasVolteadas = [];
        }, 1000);
    }

    
}

