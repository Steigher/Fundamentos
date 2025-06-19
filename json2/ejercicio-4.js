//Crear un objeto de un animal
//1. Mostrar el nombre del animal
//2. Mostrar la edad del animal
//3. Crear una funcion dentro del objeto que muestre un mensaje con el nombre y la edad del animal

let animal = {
    nombre: "Trosky",
    edad: 7,
    nombreyedad: function( ){
        console.log("Nombre:", this.nombre, "Edad", this.edad)
    }
}

console.log(animal)

animal.nombreyedad()