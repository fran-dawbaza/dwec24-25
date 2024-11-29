  // ...Tu código...
  function Calculator(){
    this.calculate = (cadena) =>{
      const arr = cadena.split(' ');
      if (arr.length !== 3) return NaN;
      let operando1 = +arr[0];
      let operador = arr[1];
      let operando2 = +arr[2];

      if (operador ==='+') return operando1+operando2;
    }
  }

  let calc = new Calculator;

alert( calc.calculate("3 + 7") );