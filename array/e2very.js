/*📌 Método every()
¿Qué hace?
Retorna true solo si todos los elementos del array cumplen la condición.
Si al menos uno falla, retorna false.
Ideal para validaciones generales (ej.: "¿Todos los usuarios están activos?").

Sintaxis básica:
const todosCumplen = array.every((elemento) => {
  return /* condición ;
});*/

/*📝 Ejercicios con every()
🔹 Nivel Básico
1. ¿Todos los números son pares?
Dado el array [2, 4, 6, 8, 10], verifica si todos son pares.

2. ¿Todos los nombres tienen más de 3 letras?
Dado el array ["Ana", "Luis", "Mía", "Carlos"], comprueba si todos los nombres tienen longitud > 3.*/

const numeros = [2, 4, 6, 8, 10];
const todosPares = numeros.every(num => num % 2 === 0 );
console.log(todosPares);

const nombres = ["Ana", "Luis", "Mía", "Carlos"];
const mas3Letras = nombres.every(nomb => nomb.length > 3)
console.log(mas3Letras);

/*1. ¿Todos los productos tienen stock?
Dado el array:
Verifica si todos los productos tienen stock > 0.
*/

const productos = [
  { id: 1, nombre: "Laptop", stock: 5 },
  { id: 2, nombre: "Mouse", stock: 0 },
  { id: 3, nombre: "Teclado", stock: 10 },
];

const stock = productos.every(prod => prod.stock > 0);
console.log(stock);

/*2. ¿Todos los usuarios son adultos?
Dado el array:
Comprueba si todos tienen edad >= 18.*/

const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 17 },
  { nombre: "Carlos", edad: 30 },
];

const adultos = usuarios.every(usua => usua.edad >= 18);
console.log(adultos);

