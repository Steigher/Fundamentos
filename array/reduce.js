/*reduce (): reducir un array a un unico valor
ejecuta una funcion acumuladora sobre cada elemento
Ejemplo (sumar todos los elementos)
*/

const numeros = [1, 2, 3, 4];
const suma = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(suma);

const frutas = ['manzana', 'banana', 'fresa', 'Naranja'];
const sumaFrutas = frutas.reduce((cum, num) => cum + num, "-");
console.log(sumaFrutas);
