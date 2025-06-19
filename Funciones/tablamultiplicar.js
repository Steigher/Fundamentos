/* crear una funcoone que se llame tablaDeMultiplicar(numero)
que imprima la tabla de multiplicar
del numero ingresado

tablaDeMultiplicar(5

output:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
etc
etc*/


/* TABLA DE MULTIPLICAR DE 5

primero necesito una funcion que me arroje la tabla de multiplicar, sea cual sea el numero que le meta
en la funciòn necesito un bucle, que se ejecute hasta 10 iteraciones
en cada iteracion va a ejecutar el parametro que yo le meta a la funcion
y en el output de cada iteraciòn debe aparecer : parametro, "x", iteracion = parametro * iteracion*/

/*function tablaDeMultiplicar(unNumero) {
    for (let i = 1; i <= 10; i++) {
        console.log(unNumero, "x", i, "=", (unNumero*i))
        
    }
}
tablaDeMultiplicar(5)*/


/*tablaDeMultiplicar2(5,15)
output:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
etc
etc
etc
5 x 11 = 55
5 x 12 = 60 */



function tablaDeMultiplicar1(unNumero, hastaNumero) {
    for (let i = 1; i <= hastaNumero; i++) {
        console.log(unNumero, "x", i, "=", (unNumero*i))
        
    }
}
tablaDeMultiplicar1(5, 15)
