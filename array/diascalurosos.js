/* bucles + arrays
Dado un array de temperaturas, contar cuantos dias superan los 30º */

const temperaturas = [28, 31, 30, 35, 29];
let contador = 0;
for (let i = 0; i < temperaturas.length; i++) {
    console.log(i)
    if (temperaturas[i] > 30) {
    contador++
    }
}
console.log (contador)