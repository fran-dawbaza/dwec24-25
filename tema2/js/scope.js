
/*
function incrementaContador(n){
    return function () {
        return n++;
    }
}

const funcionContador = incrementaContador(5);
console.log(funcionContador()); // 5
console.log(funcionContador()); // 6
console.log(funcionContador()); // 7
console.log(funcionContador()); // 8

const funcionContador2 = incrementaContador(0);
console.log(funcionContador2()); // 0
console.log(funcionContador2()); // 1
console.log(funcionContador2()); // 2
console.log(funcionContador()); // 9
*/
/*
let n=0;
function nuevoContador(){
    return function () {
        return n++;
    }
}

const contador1 = nuevoContador();
console.log(contador1()); // 0
console.log(contador1()); // 1

const contador2 = nuevoContador();
console.log(contador2()); // 2
console.log(contador1()); // 3

*/
let n=0;
function nuevoContador(){
    let n = 0;
    return () => n++;
}

const contador1 = nuevoContador();
console.log(contador1()); // 0
console.log(contador1()); // 1

const contador2 = nuevoContador();
console.log(contador2()); // 0
console.log(contador1()); // 2
