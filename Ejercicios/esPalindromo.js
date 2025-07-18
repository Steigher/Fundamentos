/*Escribe una función esPalindromoTolerante(s) que retorne true si la cadena s es un palíndromo, ignorante hasta un carácter que no coincida
ejemplo: 
console.log(esPalindromoTolerante("abcba")) // true(se puede eliminar c)
*/
const letras = "abcba"
const anita = "anitalavalatina"
const anitaletramala = "anitalavalatino"
const anitaletramala2 = "12345678987654321"
const anitaletramala3 = "yo+*_*ytu*_*uty*_*+oy"
function esPalindromoTolerante(palabra) {
    let resultado = true
    for (let i = 0; i < palabra.length; i++) {
        const longitudLetras = palabra.length
        if (palabra[i] === palabra[longitudLetras - i - 1]) {
            //console.log(letras[i], letras[longitudLetras - i - 1]);
            resultado = true
        } else {
            resultado = false
        }
        // console.log(resultado)
        if (resultado === false) {
            return false
        }
    } return resultado
}
console.log(esPalindromoTolerante(anita));
console.log(esPalindromoTolerante(anitaletramala))
console.log(esPalindromoTolerante(anitaletramala2));
console.log(esPalindromoTolerante(anitaletramala3))

