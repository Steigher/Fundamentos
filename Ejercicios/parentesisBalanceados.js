
/* dado un string, determinar si es valido:  "({[]})" -> true
"([)]" -> false
*/

const string = "{([])}"

function parentesisBalanceado(string) {
    let posicioni = ""
    let posicionj = ""
    let resultado = true
    for (let i = 0; i < string.length / 2; i++) {
        posicioni = string[i]
        console.log(posicioni);
        resultado = true
    } for (let j = string.length - 1; j >= string.length / 2; j--) {
        posicionj = string[j]
        console.log(posicionj);
    } if ((posicioni === "(" && posicionj === ")")) {
        resultado = true
        console.log(resultado);
    } else if (posicioni === "{" && posicionj === "}") {
        resultado = true
        return true
    } else if (posicioni === "[" && posicionj === "]") {
        resultado = true
        return true
    } else {
        resultado = false
    }
    return resultado
}
console.log(parentesisBalanceado(string))
//console.log(esPalindromoTolerante(letras))
