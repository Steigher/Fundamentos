/* EJERCICIO 2: ENCONTRAR NUMERO SOLITARIO 
Dado un array donde todos los nùmeros aparecen dos veces, excepto uno, escribe una función enontrarSolitario(nums) que retorne el numero único. 
ejemplo: console.log(encontrarsolitario([4, 1, 2, 1, 2])).  ;/ 4
*/

// tener un array de numeros
// verificar los numeros dentro del array
// verificar si uno es igual al otro
// si hay uno que no es igual retornar el numero

const numeros = [4, 1, 2, 1, 2, 4, 6]
const ar = []
//tomo el primer numero, corto el resto dle array y comparo el primer numero si està dentro del array cortado

for (let i = 0; i < numeros.length; i++) {
    const numeroAComparar = numeros[i]
    console.log(numeroAComparar)
    const corteAdelante = numeros.slice(i + 1)
    const corteAtras = numeros.slice(0, i)
    console.log(corteAdelante);
    console.log(corteAtras);

    const numeroComparadoAdelante = corteAdelante.includes(numeroAComparar)
    console.log(numeroComparadoAdelante)
    const numeroComparadoAtras = corteAtras.includes(numeroAComparar)
    console.log(numeroComparadoAtras);

    if (numeroComparadoAdelante !== true && (numeroComparadoAtras !== true)) {
        console.log(numeroAComparar)
    }
}


function verificarNumeroSolitario(numeros) {
   for (let i = 0; i < numeros.length; i++) {
    const numeroAComparar = numeros[i]
    const corteAdelante = numeros.slice(i + 1)
    const corteAtras = numeros.slice(0, i)
    const numeroComparadoAdelante = corteAdelante.includes(numeroAComparar)
    const numeroComparadoAtras = corteAtras.includes(numeroAComparar)
    
    if (numeroComparadoAdelante !== true && (numeroComparadoAtras !== true)) {
        return numeroAComparar
    }
} 
}
console.log(verificarNumeroSolitario(numeros));