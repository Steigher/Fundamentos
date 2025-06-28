/*
Recibimos una matriz de cadenas de texto.
 Tenemos que localizar la posición de la palabra "JavaScript" en la matriz y devolver su posición como un array de dos elementos: el índice de la fila y el índice de la columna.
 
 output: console.log(encontrarLengua(matrix) // -> [0, 2]
*/

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
]
function encontrarLenguaje(matrix) {
    for (let i = 0; i < matrix.length; i++) { //itero las filas
        //   console.log(matrix[i]);
        for (let j = 0; j < matrix[i].length; j++) { //itero las columnas
            // console.log(matrix[i][j])
            // console.log(matrix[i]);
            //  console.log(matrix[j]);
            if (matrix[i][j] === 'JavaScript') {
                return [i, j]
            }
        }
    }
    return -1
}
console.log(encontrarLenguaje(matrix));

function findLenguaje(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const encontrarIndice = matrix[i].indexOf('JavaScript');
        return encontrarIndice
    }
    return false
}

console.log(findLenguaje(matrix));
