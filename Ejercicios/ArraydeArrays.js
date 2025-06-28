
const matriz = [
    [1, 2, 3],
    [4, 5, 6]
]
// Para acceder a los elementos de una matriz, necesitaremos utilizar dos índices: uno para la fila y otro para la columna.
// Por ejemplo, si queremos acceder al número 5 en la matriz anterior, haríamos lo siguiente:
const numero5 = matriz[1][1]
console.log(numero5)
//recuerda que los arrays en JavaScript tienen un índice base cero


//Podemos utilizar bucles anidados para iterar sobre todos los elementos de una matriz. Aquí hay un ejemplo de cómo hacerlo utilizando un bucle for:
for (let i = 0; i < matriz.length; i++) {
    console.log(i)
    console.log(matriz[i])
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(j)
        console.log(matriz[i][j])
    }
}
// En este ejemplo, el bucle externo recorre [1] cada fila de la matriz, mientras que el bucle interno [2] recorre cada elemento dentro de una fila específica.

/*Puedes usar otros bucles para iterar sobre una matriz, como un bucle while o un bucle for...of. También puedes utilizar el método forEach() 
de los arrays para iterar sobre una matriz, pero tendrás que anidar dos llamadas a forEach() para iterar sobre todos los elementos de la matriz.*/

const iterado = matriz.forEach((fila, indiceFila) => console.log(fila, indiceFila))
console.log("-----");

const iterado1 = matriz.forEach((fila, indiceFila) => {
    const iterado2 = fila.forEach((element) => console.log(element))
    console.log("------");
    const iterado3 = fila.forEach((element, indiceColumna) => {
        console.log('Fila ' + indiceFila);
        console.log('Columna ' + indiceColumna);
        console.log('element ' + element);
        console.log('');
    })
})