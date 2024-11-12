"use strict";

let contador = 0;
function fibonacci(n) {
    contador++;
    if (n===0) {
        return 0;
    }
    if (n===1) return 1;
    return fibonacci(n-2) + fibonacci(n-1);
}

//console.log("fibonacci(4): "+ fibonacci(4) + " con " + contador + " llamadas recursivas");  
contador=0;
console.time("FIBO");
//console.log("fibonacci(45): "+ fibonacci(45) + " con " + contador + " llamadas recursivas");  
//console.timeEnd("FIBO");

const fiboIterativo = function (pos){
    let n_1=1n;
    let n_2=0n;
    let n = 1n;
    let aux=0n;
    for (let i=2; i<pos; i++){
        aux = n_1 + n_2;
        n_2= n_1;
        n_1 = n;
        n = aux;
    }
    return n;
}
console.log("fiboIterativo(3000): "+ fiboIterativo(3000) + " con " + contador + " llamadas recursivas");  
console.timeEnd("FIBO");
