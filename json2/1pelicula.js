/* Crear un JSON llamado pelicula con:
Titulo (string)
Año (number)
Genero (string)
EsFavorita (boolean)
una funcion mostrarInfo() que retorne: "Titulo: [Titulo], Año: [año]".
*/

let pelicula = {
    titulo: "Harry potter",
    genero: "Magia y fantasia",
    año: 2004,
    esFavorita: true,
    mostrarInfo: function () {
        console.log("Titulo", this.titulo, ",", "Año", this.año)
    }
}

//console.log(pelicula)
pelicula.mostrarInfo()
