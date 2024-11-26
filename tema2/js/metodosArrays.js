"use strict";

const camelize = cadena => cadena
                            .split('-')
                            .map(
                                (e,p) =>(p!==0) ? e[0].toUpperCase() + e.slice(1) : e
                                )
                            .join('');

console.log(camelize("background-color")); // == 'backgroundColor';
console.log(camelize("list-style-image")); // == 'listStyleImage';
console.log(camelize("-webkit-transition")); // == 'WebkitTransition';