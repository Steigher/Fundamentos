/*Escribe una función esPalindromoTolerante(s) que retorne true si la cadena s es un palíndromo, ignorante hasta un carácter que no coincida
ejemplo: 
console.log(esPalindromoTolerante("abcba")) // true(se puede eliminar c)
*/
const letras = "abcba"
const palindromo = "anita lava la tina"
function esPalindromoTolerante(letras) {
    /*console.log(letras.length)
    console.log(letras[0]);
    console.log(letras[4]);*/
    for (let i = 0; i < letras.length; i++) {
        const longitudLetras = letras.length
        // console.log(letras[i], letras[longitudLetras - i - 1]);
        if (letras[i] === letras[longitudLetras - i - 1]) {
            return true
        }
        return false
    }

}
console.log(esPalindromoTolerante(palindromo));
