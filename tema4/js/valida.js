/*
    SI USAMOS LA VALIDACIÓN HTML SIN JAVASCRIPT

    - se aprovechan pseudo-clases y estilos de ellas
    - el formulario sólo se envía cuando todos los campos
      del formulario tienen la pseudo-clase :valid 
    - los campos con pseudo-clase :invalid mostrarán un tooltip
      con el error indicado por el navegador
*/

/*
    CODIGO USANDO LA VALIDACIÓN HTML Y LA API DE VALIDACIÓN:

    - se aprovechan pseudo clases y estilos
    - el formulario sólo se envía cuando todos los campos
      del formulario tienen la pseudo-clase :valid, además podemos
      prevenir el submit cuando queramos usando javascript
    - los campos con pseudo-clase :invalid mostrarán un tooltip
      con el error indicado por el navegador o con el error que
      indiquemos con setCustomValidity(mensajeDeError)

    Métodos principales de la API en los campos de formulario:
      - setCustomValidity(mensajeDeError)
      - checkValidity()  // devuelve true o false
      - reportValidity() // se usa poco, para mostrar el tooltip cuando queramos
    Atributo principal de la API en los campos de formulario:
      - validity  // es un objeto con más propiedades, que serán true o false
      - validity.valid          // true cuando valida
      - validity.customError    // cuando está activo el error custom
      - validity.typeMismatch   // cuando no valida con el tipo de input
      - validity.valueMissing   // cuando no tiene valor y es requerido
      otros en https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
*/
const entrada = document.forms[1].t2;

entrada.addEventListener('input',evento=>{
    entrada.setCustomValidity('');
    if (!entrada.checkValidity()){
        if (entrada.validity.valueMissing) 
            entrada.setCustomValidity('Tienes que rellenar este campo');
        else if (entrada.validity.patternMismatch)
            entrada.setCustomValidity('Tienes que indicar "algo" o "alga"');
        else
            entrada.setCustomValidity('Se ha producido un error de validación que no he revisado');
        //entrada.reportValidity(); // descomentado muestra los mensajes siempre
    }
});

/*
    CODIGO USANDO LA VALIDACIÓN HTML Y PERO NO LA API DE VALIDACIÓN:

    - Se aprovechan pseudo clases y estilos
    - el formulario tiene el atributo novalidate
    - podemos prevenir el submit cuando queramos usando javascript
    - los campos con pseudo-clase :invalid NO mostrarán un tooltip
    - los mensajes de error los gestionamos con javascript
*/
    

/*
    CODIGO SIN USAR LA VALIDACIÓN HTML Y SIN LA API DE VALIDACIÓN:
    - No se usan atributos de validación en los campos de formulario
    - No se aprovechan pseudo clases y estilos directamente
    - Podemos prevenir el submit cuando queramos usando javascript
    - Los mensajes de error los gestionamos con javascript
*/
