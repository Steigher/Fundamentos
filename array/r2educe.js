/*📌 Método reduce()
¿Qué hace?
Reduce un array a un único valor (número, string, objeto, otro array).
Recorre el array aplicando una función acumuladora.
Ideal para sumar, concatenar, promediar, o transformar datos complejos.

Sintaxis básica:
const resultado = array.reduce((acumulador, elementoActual) => {
  return /* operación con acumulador ;
}, valorInicial);*/

/* 1. Sumar todos los números
Dado el array [1, 2, 3, 4, 5], usa reduce() para obtener la suma total (debería dar 15).

2. Concatenar strings
Dado el array ["Hola", " ", "mundo", "!"], únelo en un solo string ("Hola mundo!").*/

const numeros = [1, 2, 3, 4, 5];
const numerosSumados = numeros.reduce((acumulador, num) => (acumulador + num), 0)
console.log(numerosSumados);


const palabras = ["Hola", " ", "mundo", "!"]
const palabrasSumadas = palabras.reduce((acumulador, num) => acumulador + num, "");
console.log(palabrasSumadas);

/* 🔹 Nivel Intermedio
1. Calcular el promedio
Dado el array [10, 20, 30, 40], usa reduce() para calcular el promedio (debería dar 25).
*/

const conjunto = [10, 20, 30, 40];
const sumaConjunto = conjunto.reduce((acumulador, num) => (acumulador + num), 0);

console.log(sumaConjunto);

const promedioConjunto = sumaConjunto / conjunto.length;
console.log(promedioConjunto);


/*2. Contar ocurrencias de letras
Dado el string "abbracadabra", conviértelo en un array y usa reduce() para contar cuántas veces aparece cada letra.
El resultado debería ser un objeto como:

javascript
{ a: 5, b: 3, r: 2, c: 1, d: 1 } */


const palabra = "abbracadabra"
const letra = palabra.split("")
console.log(letra)

const conteo = letra.reduce((acc, letra) => {
  console.log(acc)
  console.log(letra);
  
 acc[letra] = (acc[letra] || 0) + 1;
 return acc;
}, {});

//console.log(conteo);
