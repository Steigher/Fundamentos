/* Ejercicios practicos 

Ejercicio 1: Crear un objeto

Crear un objeto libro con:
Titulo
Autor
Año de publicaciòn
Mètodo mostrarInfo() que imprima: "El libro [Titulo] fue escrito por [autor] en [año]"
*/

let libro = {
    titulo: "Cien anios de soledad",
    autor: "Gabriel Garcia Marquez",
    año: 2008,
    mostrarInfo: function () {
        console.log("El libro", this.titulo, "fue escrito por", this.autor, "en el año", this.año)
    }
}

console.log(libro)
libro.mostrarInfo()