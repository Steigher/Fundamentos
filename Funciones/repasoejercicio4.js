//crear una funciòn esPrimo(num) que retorne true si el numero es primo (solo divisible por 1 y por sì mismo) y false si no lo es
// funcion con retorno
//

function esprimo(num) {
    if ((num === 2) || (num === 3) || (num === 5)) {
        return true;
    } else if (num % 3 == 0) {
        return false;
    } else if (num % 5 == 0) {
        return false;
    } else if (num % 2 == 0) {
        return false;
    } else {
        return true;
    }

}
console.log(esprimo(2))
console.log(esprimo(3))
console.log(esprimo(5))
console.log(esprimo(12))
console.log(esprimo(88))
console.log(esprimo(27))
console.log(esprimo(29))
