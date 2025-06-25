/* fizzbuzz
imprimir los numeros del 1 al 100
los multiplos de 3 los reemplazaremos con fizz
los multiplos de 5 con buzzz
los multiplos de 3 y 5 con fizzbuzz


1. crear un bucle de 1 a 100
2, crear una condicion del bucle que inprima fizz si es multiplo de 3
lo mismo si es de 5
y crear una condicion && si es multiplo de los dos*/

for (let i = 0; i <= 100; i++) {
 if (i % 5 === 0 && i % 3 === 0) {
    console.log(i + ": FizzBuzz")
} else if (i % 3 === 0) {
    console.log(i + ": Buzz")
} else if (i % 5 === 0) {
    console.log(i + ": Fizz")
} else {
    console.log(i)
}
}