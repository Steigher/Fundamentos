/*iterando del 1 al 10 
e iterando al reves*/

/*for (let i = 0; i <= 10; i++) {
    console.log(i)
}

for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("Despegamooooos");
    }
      else {
            console.log("Faltan ", i, " segundos para despegar")

        }

}

for (let i = 0, j = 5; i < 5; i++, j--){
    console.log(i, j)
}*/

/* bucle anidado dle a al 10
tabla de multiplicar del 1 al 10
necesito un bucle que itere del 1 al 10
y oro que itere del 1 al 10*/

/*for (let i = 0; i <= 10; i++) {
    for (let k = 0; k <= 10; k++) {
        const resultado = i * k
        console.log( i, "x", k, "=", resultado)       
        
    }
    
} */


    /* Crear una funciòn que arrojeun numero al azar entre el 1 y el 10
    

    function numeroAzar(){
const azar = Math.random()
const multiplicado = azar * 10
const redondear = Math.floor(multiplicado)
const resultado = redondear + 1

return resultado
}

   console.log (numeroAzar())
   console.log (numeroAzar())
   console.log (numeroAzar())
   console.log (numeroAzar())
   console.log (numeroAzar())
   console.log (numeroAzar())

 */


   /*const saludar = nombre => {
    console.log("Hola", nombre)
   }
   saludar("Yeison")*/

   /* un array : matriz funciona con []*/

   /*const numbers = [1, 2, 3, 4]
   console.log(numbers) // arroja los datos de la matriz en corchetes
   console.log(numbers[1]) //arroja la posicion en la matriz
   numbers[2] = 98 //modifica la posicion del numero en la matric
   console.log(numbers)*/

   /*Metodos y propiedades del array
   length, push, pop, etc*/

   const frutas= ["pera", "manzana", "fresa", "melocoton", "guanabana"]

   console.log(frutas.length) // ejecuta el numero de palabras en el array
   console.log(frutas)// ejecuta el contenido del array
   //frutas.length = 2 //modifica el numero de palabras a ejecutar
   //console.log(frutas.length)
   console.log(frutas)

   //. push. Nos permite añadir un elemento al final del array

   frutas.push("aguacate")
   console.log(frutas.length)
   console.log(frutas)
   
   //.pop, quita el ultimo valor del array

   frutas.pop()
   console.log(frutas)

//. shift, elimina el primer elemento del array

   frutas.shift()
   console.log(frutas)

   //.unshift, agrega un elemento al inicio del array

   frutas.unshift("mora")
   console.log(frutas)