/*Entrevista tecnica: Escribe una función encontrarCombinaciones(nums, target) que retorne todas las combinaciones de dos numeros en nums que sumen target
ejemplo. console.log([2, 7, 11, 15], 9). output: [2,7]*/


const array = [2, 7, 11 , 15];
const array2 = [5, 2, 3, 4, 1]
function encontrarCombinaciones(nums, target) {
    let almacenar = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target){
                almacenar.push([nums[i], nums[j]])
            }
    }
  } return almacenar
}
console.log(encontrarCombinaciones(array, 9))
console.log(encontrarCombinaciones(array2, 5));
