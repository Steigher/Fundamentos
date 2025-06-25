/* EJERCICIO 2: ENCONTRAR NUMERO SOLITARIO 
Dado un array donde todos los nùmeros aparecen dos veces, excepto uno, escribe una función enontrarSolitario(nums) que retorne el numero único. 
ejemplo: console.log(encontrarsolitario([4, 1, 2, 1, 2])).  ;/ 4
*/

// tener un array de numeros
// verificar los numeros dentro del array
// verificar si uno es igual al otro
// si hay uno que no es igual retornar el numero

const numeros = [4, 1, 2, 1, 2]

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
    for (let j = i + 1; j < numeros.length; j++) {
        console.log(numeros[i])
        console.log(numeros[j])
        console.log(`Comparando ${numeros[i]} con ${numeros[j]}`);
        if (numeros[i] === numeros[j]) {
            console.log(`Comparando ${numeros[i]} con ${numeros[j]}`);
        } else {
            console.log("Nada")
        }
    }
}
