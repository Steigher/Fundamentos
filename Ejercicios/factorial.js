/* Calcular el factorial de un numero
crear una funcion recursiva factorial(n) que retorne el factorial de n (ej: 5! = 5 x 4 x 3 x 2 x 1 = 120)*/

function factorial(numero) {
    let resultado = numero;
    let factorial = 0;
    for (let i = numero; i > 1; i--) {
        factorial = i - 1
        resultado = resultado * factorial
        console.log(factorial);
        console.log(resultado);
    } return resultado
}
console.log(factorial(5))

function calcularFactorial(number) {
    if (number === 1) return 1;
    return number * calcularFactorial(number-1)
}
console.log(calcularFactorial(5))