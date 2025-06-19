/*// Orden alfabético (default)
array.sort();

// Orden personalizado (con función de comparación)
array.sort((a, b) => a - b); // Ejemplo para números
*/

/*📝 Ejercicios con sort()
🔹 Nivel Básico
1. Ordenar palabras alfabéticamente
Dado el array ["perro", "gato", "elefante", "ardilla"], ordénalo alfabéticamente.

2. Ordenar números de menor a mayor
Dado el array [10, 3, 8, 1, 33], ordénalo de forma ascendente.*/

const animales = ["perro", "gato", "elefante", "ardilla"];
const animalesOrden = animales.sort();
console.log (animalesOrden);

const numeros = [10, 3, 8, 1, 33];
const numerosOrden = numeros.sort((a, b) => a - b );
console.log(numerosOrden);

/*🔹 Nivel Intermedio
1. Ordenar objetos por propiedad
Dado el array de personas:

javascript
const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Carlos", edad: 20 }
];
Ordénalo por edad (de menor a mayor).*/
const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Carlos", edad: 20 }
];
const edadPersonas = personas.sort((a, b) => a.edad - b.edad);
console.log(edadPersonas);


/*2. Ordenar strings por longitud
Dado el array ["sol", "constelación", "luna", "estrellas"], ordénalo de la palabra más corta a la más larga. */

const palabras = ["sol", "constelación", "luna", "estrellas"];
const ordenPalabras = palabras.sort((a, b) => b.length - a.length);
console.log(ordenPalabras);
