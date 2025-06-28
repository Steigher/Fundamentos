
const tablero = [
    ['X', 'O', 'X'],
    ['O', 'X', '0'],
    ['O', 'O', 'X']
]
function juegoTriki(tablero) {
    for (let i = 0; i < tablero.length; i++) {
        // console.log(tablero[i][0], tablero[i][1], tablero[i][2])
        if (tablero[i][0] === tablero[i][1] && tablero[i][0] === tablero[i][2]) {
            return `Triki en linea - El ganador es ${tablero[i][0]}`
        }
    }
    for (let j = 0; j < tablero.length; j++) {
        // console.log(tablero[j][i])
        if (tablero[0][j] === tablero[1][j] && tablero[0][j] === tablero[2][j]) {
            return `Triki en columna - El ganador es ${tablero[0][j]}`
        }
    }
    // Verificar diagonales
    if (tablero[0][0] !== '' && tablero[0][0] === tablero[1][1] && tablero[0][0] === tablero[2][2]) {
        return `Triki diagonal, gana ${tablero[0][0]}`;
    }
    if (tablero[0][2] !== '' && tablero[0][2] === tablero[1][1] && tablero[0][2] === tablero[2][0]) {
        return `Triki diagonal, gana ${tablero[0][2]}`;
    }
    return null
}
console.log(juegoTriki(tablero));


/*Recibimos una matriz de cadenas de texto. Tenemos que localizar la posición de la palabra "JavaScript" en la matriz
 y devolver su posición como un array de dos elementos: el índice de la fila y el índice de la columna.
 const matrix = [
  ['HTML', 'CSS', 'JavaScript'],
  ['Java', 'C++', 'Python'],
  ['Ruby', 'Go', 'Swift']
]
const position = findJavaScript(matrix)
console.log(position) // -> [0, 2]````````
 */

