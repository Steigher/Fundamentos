/*Escribe una función esPalindromoTolerante(s) que retorne true si la cadena s es un palíndromo, ignorante hasta un carácter que no coincida
ejemplo: 
console.log(esPalindromoTolerante("abcba")) // true(se puede eliminar c)
*/
const letras = "abcba"
const palindromo = "anitalavalatina"
function esPalindromoTolerante(letras) {
    let resultado = true
    for (let i = 0; i < letras.length; i++) {
        const longitudLetras = letras.length
        if (letras[i] === letras[longitudLetras - i - 1]) {
            console.log(letras[i], letras[longitudLetras - i - 1]);
            resultado = true
        } else {
            resultado = false
        }
        console.log(resultado)
        if (resultado === false) {
            return false
        }
    } return resultado
}
console.log(esPalindromoTolerante(palindromo));
