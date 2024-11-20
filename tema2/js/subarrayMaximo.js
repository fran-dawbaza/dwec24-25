"use strict";

function getMaxSubSum(arr) {
    let sumaMaxima = -Infinity;
    let acumulador = 0;

    for (let item of arr) { // por cada item de arr
        acumulador = Math.max(item, acumulador+item); 
        sumaMaxima = Math.max(sumaMaxima, acumulador); // registra el máximo
    }

    return sumaMaxima;
}

console.log("[-1, 2, 3, -9]-> es 5: " + getMaxSubSum([-1, 2, 3, -9]) ); // 5
console.log("[-1, 2, 3, -9, 11]-> es 11: "+ getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
console.log("[-2, -1, 1, 2]-> es 3: "+ getMaxSubSum([-2, -1, 1, 2]) ); // 3
console.log("[100, -9, 2, -3, 5]-> es 100: "+ getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
console.log("[1, 2, 3] -> es 6: "+ getMaxSubSum([1, 2, 3]) ); // 6
console.log("[-1, -2, -3]-> es -1: "+ getMaxSubSum([-1, -2, -3]) ); // -1