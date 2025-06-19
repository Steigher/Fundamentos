const persona = {
    nombre: "David",
    edad: 24,
    comidaFavorita: "Hamburguesa",
}

for (const key in persona) {
    // console.log(key, persona[key])
}

//COMBINADOS

const arrayDeObjetos = [
    { nombre: "David", edad: 24, comidaFavorita: "Hamburguesa" },
    { nombre: "Sally", edad: 22, comidaFavorita: "Shawarma" },
    { nombre: "Steven", edad: 18, comidaFavorita: "Pizza" }
]

for (let i = 0; i < arrayDeObjetos.length; i++) {
    //console.log("Nombre:", arrayDeObjetos[i].nombre +",", arrayDeObjetos[i].edad, "años" + ",", "le gusta la", arrayDeObjetos[i].comidaFavorita )
    //  console.log(arrayDeObjetos[i].edad)
}


const objetosConArray = {
    nombre: "objeto con Array",
    arr: ["abeja", "banana", "camion", "dado"]
}

objetosConArray.arr.forEach((elemento) => {
   // console.log(elemento)
})

for (let i = 0; i < objetosConArray.arr.length; i++) {
    //console.log(objetosConArray.arr[i])
}

/*For example, if the array [1,2,3], , so return :6
Function Description
Complete the  function with the following parameter(s):
ar[n]: an array of integers
Returns
[int]: the sum of the array elements*/

const ar = [1, 2, 3, 4, 10, 11];
function simpleArraySum(ar) {

    let suma = 0
    for (let i = 0; i < ar.length; i++) {
        suma += ar[i]
    }
    return suma
}
//console.log(simpleArraySum(ar))

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */
const a = [17, 28, 30]
const b = [99, 16, 8]

a.forEach((aelement)=>{
    console.log(aelement)
b.forEach((belement) => {
    console.log(belement)
})
})

for (let i = 0; i < a.length; i++) {
 console.log(a[i])
 for (let j = 0; j < b.length; j++) {
  console.log(b[j]-a[i])
    if (a[i] > b[i]){
        
        console.log(a[j])
    }
}
}


