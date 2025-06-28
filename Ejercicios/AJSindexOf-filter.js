/*Recibes dos parámetros: una lista de palabras words y una palabra word. Primero, busca el índice de la palabra en la lista. Después, usa ese índice (que será un número)
 y devuelve todas las palabras de words que sean más largas (length) que el número del índice.
Ten en cuenta que la palabra word siempre existirá en el array, por lo que no es necesario comprobar si existe o no.*/

const nombres = ["maria", "pedro", "arturo", "tiki taka", "ana", "carlos"]
const nombre = "carlos"
function buscarPalabras(words, word) {
    const buscarIndice = words.indexOf(word) //aqui encuentro el indice donde se encuentra la palabra
    // console.log(buscarIndice)
    const palabrasMayora2 = words.filter((name) => name.length > buscarIndice) // aqui filtro los nombres mayores a la longitud de mi indice
    return palabrasMayora2
}
console.log(buscarPalabras(nombres, nombre))

const nombres1 = ["maria", "pedro", "arturo", "tiki taka", "ana", "carlos"]
const nombre1 = "carlos"
function buscarPalabras(words, word) {
    for (let i = 0; i < words.length; i++) {
        const palabrasMayora2 = words.filter((name) => name.length > i)
        if (words[i] === word) {
            return palabrasMayora2
        }
    }
    return false
}
console.log(buscarPalabras(nombres1, nombre1))