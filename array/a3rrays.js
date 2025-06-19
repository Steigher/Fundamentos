// Ejercicio 1. Dada una matriz cuadrada de N x N, crear un array con los valores de las 4 esquinas.

const array = [
    [1, 2, 3],
    [4, 99, 6],
    [7, 8, 3]
]
//output: [1, 3, 7, 3]
const array2 = []
for (let i = 0; i < array.length; i++) {
    // console.log("fila", i, array[i])
    for (let j = 0; j < array[i].length; j++) {
        //   console.log("columna", j, array[i][j])
        if (i === 0 && j === 0) {
            console.log(array[i][j]);
            array2.push(array[i][j])
        } else if (i === 0 && j === 2) {
            console.log(array[i][j]);
            array2.push(array[i][j]);
        } else if (i === 2 && j === 0) {
            console.log(array[i][j])
            array2.push(array[i][j])
        } else if (i === 2 && j === 2) {
            console.log(array[i][j])
            array2.push(array[i][j])
        }
    };
}
console.log(array2)
