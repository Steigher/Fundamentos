//Crear una función sumarHastaNegativo(10) que pida números al usuario y los sume hasta que ingrese un número negativo.

//sumarHastaNegativo(5)
//sumarHastaNegativo(4)
//sumarHastaNegativo(3)
//sumarHastaNegativo(10)
//sumarHastaNegativo(-1)
//sumarHastaNegativo(5)
//sumarHastaNegativo(3)
//sumarHastaNegativo(10)

//console.log(TotalSuma);

let memoria = false;
let totalSuma = 0;

function sumarHastaNegativo(numero) {
  if(numero != -1 && memoria === false) {
    totalSuma = totalSuma + numero;
  } else {
    memoria = true;
  }
}

sumarHastaNegativo(5); //5 != -1 = VERDAD; memoria = false; SE SUMA
sumarHastaNegativo(10); //10 != -1 = VERDAD; memoria = false; SE SUMA
sumarHastaNegativo(5); //5 != -1 = VERDAD; memoria = false; SE SUMA
sumarHastaNegativo(5); //5 != -1 = VERDAD; memoria = false; SE SUMA
sumarHastaNegativo(-1); //-1 != -1 = FALSE; memoria = true
sumarHastaNegativo(5); //5 != -1 = VERDAD; memoria = true; 
sumarHastaNegativo(10); //10 != -1 = VERDAD; memoria = true;

console.log(totalSuma);
