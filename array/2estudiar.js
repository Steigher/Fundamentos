const numeros5 = [1, 2, 3, 4, 5];
const numeros2 = [6, 7, 8, 9, 10];

const numerosConcatenados = numeros5.concat(numeros2)
console.log(numerosConcatenados);

const numerosConcatenados2 = [...numeros5, ...numeros2]
console.log(numerosConcatenados2);

/* En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una función procesarPedido
 que recibe un pedido, que es un array de platos. Lo que debemos hacer es:

El primer elemento lo sacamos del array, ya que es el nombre del cliente.
Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.
Después añadimos al final del array el nombre del usuario que sacamos antes.
Recuerda que debes devolver el array modificado:*/

const elPedido = ["Juan", "Pizza", "Cocacola", "Papas"]
function procesarPedido(pedidos) {
    pedidos.shift();
    pedidos.unshift("bebida");
    pedidos.push("Juan");
    return pedidos

}
console.log(procesarPedido(elPedido))


/*Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números pares en la lista.
 La función deberá iterar sobre cada número en la lista, 
comprobar si el número es par y, si es así, añadirlo a la suma total. Usa el bucle que quieras para solucionarlo.*/
const numeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function sumarPares(number) {
    let suma = 0
    for (let i = 0; i <= number.length; i++) {
        if (number[i] % 2 === 0) {
            suma += number[i]
        }
        // tu código aquí
    }
    return suma
}
console.log(sumarPares(numeros4))
console.log(1 + 3 + 5 + 7 + 9);


const emojis = ['✨', '🥑', '😍']
// metodo indeOf, permite encontrar la posicion dentro de un Array
const posicionAguacate = emojis.indexOf('🥑')
console.log(posicionAguacate)

// metodo includes, el elemento existe en el array'
const tieneEstrellas = emojis.includes('✨')
console.log(tieneEstrellas);

// some, alguno de los elementos cumple con la condiciòn?
const estaEnamorado = emojis.some((emoji) => emoji === '😍')
console.log(estaEnamorado)

const names = ['Leo', 'Isa', 'Ían', 'Lea']
const nombreLargo = names.some((name) => name.length > 2)
console.log(nombreLargo)

const tieneNumeroMayorA5 = numeros4.some((number) => {
    console.log(`Estoy iterando hasta el numero ${number}`)
    return number > 5
})
console.log(tieneNumeroMayorA5);

//.find - Devuelve el primer elemento que cumple con la condición

const numbers = [13, 27, 44, -10, 81]
const hayNegativo = numbers.find((number) => number < 0)
console.log(hayNegativo)
const hayMayora80 = numbers.find((number) => number > 80) ? true : false;
console.log(hayMayora80)

/*Crear una función que reciba un array de palabras y devuelva true si todas las palabras terminan con la letra "a" 
y false si al menos una palabra no termina con la letra "a".
Usa el método endsWith() de string para resolverlo.*/
const palabras = ["animalia", "tikitaka", "azucena", "mariguana"]
function acabanEnA(words) {
    const todosTerminanEnA = words.every((palabra) =>  palabra.endsWith("a")) ;
    return todosTerminanEnA
}
console.log(acabanEnA(palabras))