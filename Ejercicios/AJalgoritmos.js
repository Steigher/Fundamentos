
const numeros = [11, 18, 23, 25, 55, 48, 55, 88, 111, 120]

function findMaxAlgorithm(array) {
  let max = array[0] // recuperamos el primer elemento del array
  // recorremos el array desde el segundo elemento
  for (let i = 1; i < array.length; i++) {
    // ¿es el elemento actual mayor que el máximo?
    if (array[i] > max) {
      // si es así, lo guardamos como nuevo máximo
      max = array[i]
    } else if(array[i] <= max){
        break
    }
  }
  // devolvemos el máximo número que hemos encontrado
  return max;
}
console.log(findMaxAlgorithm(numeros));
