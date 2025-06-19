/*Es un método que transforma cada elemento de un arreglo y devuelve un nuevo arreglo con los resultados.

No modifica el arreglo original (crea uno nuevo).

Recorre cada elemento y aplica una función sobre él.
*/

const numeros = [1, 2, 3, 4];

const duplicados = numeros.map((num) => num * 2);
console.log(duplicados)

/*2. Ejemplo con objetos: Extraer nombres
Objetivo: Dado un arreglo de personas, crear un arreglo solo con los nombres.

Código: */
const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
];
const soloNombres = personas.map((nombre) => nombre.nombre)
console.log(soloNombres)


/*3. Ejemplo con índice: Añadir posición
Objetivo: Transformar ["a", "b", "c"] en ["0-a", "1-b", "2-c"].

Código: */

const letras = ["a", "b", "c"];
const letrasYNumeros = letras.map((letra, index) => {
    console.log(letra)
    console.log(index)
   return index, "-" , letra;
})
console.log(letrasYNumeros);

const letras1 = ["a", "b", "c"];
const letrasYNumeros1 = letras.map((letra, index) => {
    console.log(letra)
    console.log(index)
    return `${index}-${letra}`;
})
console.log(letrasYNumeros1);
