/* Método some()
¿Qué hace?
Verifica si al menos un elemento del array cumple una condición.
Retorna true si encuentra uno, false si ninguno cumple.
No modifica el array original.

Sintaxis básica:
const existe = array.some((elemento) => {
  return /* condición ;
});*/

/*📝 Ejercicios con some()
🔹 Nivel Básico
1. Verificar si hay números pares
Dado el array [1, 3, 5, 7, 8, 9], ¿hay algún número par?

2. Verificar si hay nombres largos
Dado el array ["Ana", "Luis", "Carlos", "Mía"], ¿hay algún nombre con más de 4 letras?*/

const numeros = [1, 3, 5, 7, 8, 9];
const hayPares = numeros.some(num => num % 2 === 0)
console.log(hayPares);

const nombre = ["Ana", "Luis", "Carlos", "Mía"];
const hayNombreLargo = nombre.some(nom => nom.length > 5);
console.log(hayNombreLargo);

/*🔹 Nivel Intermedio
1. Verificar usuarios premium
Dado el array de usuarios:
¿Hay algún usuario con cuenta premium?*/

const usuarios = [
  { id: 1, nombre: "Ana", premium: false },
  { id: 2, nombre: "Luis", premium: true },
  { id: 3, nombre: "Carlos", premium: false },
];

const hayPremium = usuarios.some(usu => usu.premium === true);
console.log(hayPremium);

/*2. Verificar disponibilidad de productos
Dado el array de productos:
¿Hay algún producto con stock > 0 y nombre que empiece con "M"?
*/

const productos = [
  { id: 1, nombre: "Laptop", stock: 0 },
  { id: 2, nombre: "Mouse", stock: 5 },
  { id: 3, nombre: "Teclado", stock: 0 },
];
const productostockm = productos.some(prod => prod.stock > 0 && prod.nombre.startsWith("M"));
console.log (productostockm); 
