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
    const todosTerminanEnA = words.every((palabra) => palabra.endsWith("a"));
    return todosTerminanEnA
}
console.log(acabanEnA(palabras))

/*
Recibes una lista de números. Debes ordenar los números de menor a mayor según su valor absoluto.
 Eso quiere decir que los números negativos pierden el signo y se ordenan como si fueran positivos.
 Por ejemplo, si recibes [5, -10, -2, -25, -7] deberías devolver [-2, 5, -7, -10, -25].


*/

const arrayDeNumeros = [5, -10, -2, -25, -7];
function sortAbsoluteNumbers(numbers) {
    const numeroAbsolutoOrdenado = numbers.map(numeros => Math.abs(numeros))
    //console.log(numeroAbsolutoOrdenado);
    const absolutosarreglados = numeroAbsolutoOrdenado.sort((a, b) => a - b)
    return absolutosarreglados
    //  console.log(absolutosarreglados)

}

console.log(sortAbsoluteNumbers(arrayDeNumeros))

const absolutos = arrayDeNumeros.map(numero => Math.abs(numero))
console.log(absolutos);

const arreglados = absolutos.sort((a, b) => a - b)
console.log(arreglados)

const mapeo = arrayDeNumeros.map(numero => Math.abs(numero))
console.log(mapeo);

/*filter: Un nuevo Array con los elementos que cumplan una condición
El método filter crea un nuevo array con todos los elementos que devuelven true al ejecutar una función que le pasamos como parámetro.
*/
const numbers2 = [1, 2, 3, 4, 5, 6, 7];
const numbers2filtrados = numbers2.filter((number) => number % 2 === 0)
console.log(numbers2filtrados)

/*O quedarnos con todas las cadenas de texto que tengan la letra a:*/

const strings = ['hola', 'adiós', 'casa', 'coche', 'perro', 'gato']
const contienea = strings.filter((string) => string.includes("g"))
console.log(contienea)

/*.map: Un nuevo Array con los elementos transformados
El método .map crea un nuevo array de la misma longitud que el original, pero con los elementos transformados por una función que le pasamos como parámetro. 
Así que la función recibirá cada elemento del array y tendremos que devolver el elemento transformado.*/
const numbers3 = [1, 2, 3]
function numerostransformados(a) {
    const numerosmultiplicados = a.map((num) => num * 5)
    return numerosmultiplicados
}
console.log(numerostransformados(numbers3))

/* O podríamos crear un array con la longitud de cada cadena de texto de un array de cadenas:*/
const strings1 = ['hola', 'javascript', 'midu', 'programación'];
const lengthstring = strings1.map((a) => a.length);
console.log(lengthstring)

/*Recibes dos parámetros: una lista de palabras words y una palabra word. Primero, busca el índice de la palabra en la lista.
 Después, usa ese índice (que será un número) y devuelve todas las palabras de words que sean más largas (length) que el número del índice.
Ten en cuenta que la palabra word siempre existirá en el array, por lo que no es necesario comprobar si existe o no.
: : primero debo encontar el indice con finindex en el array y encontrar el indice de la palabra
despues mapeo todas las palabras del array que sean mas largas que el indice
*/
const unarreglodepalabras = ["niño", "alakran", "maquina", "mamaguevo", "animalito"];
const unapalabra = "animalito"
function buscaPalabras(words, word) {
    const encontrar = words.findIndex((lapalabra) => lapalabra === word)
    console.log(encontrar)
    const elmapeo = words.filter((mapa) => mapa.length > encontrar)
    return elmapeo
}
console.log(buscaPalabras(unarreglodepalabras, unapalabra))

const uno = unarreglodepalabras.filter((filtro) => filtro === "alakran")
console.log(uno);
const dos = unarreglodepalabras.map((filter) => filter === "alakran")
console.log(dos);
const encontrar = unarreglodepalabras.findIndex((lapalabra) => lapalabra === "alakran")
console.log(encontrar);

