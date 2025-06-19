/* Eliminar y añadir atributos
enunciado:
Crear un objeto usuario con: nombre, edad, y email.
Elimina el atributo email usando delete.
añade un nuevo atributo activo boolean
*/

let usuario = {
    nombre: "El papu",
    edad: "27",
    email: "tikitaka@gmail.com",
}


delete usuario.email; // Borrar variable email
console.log(usuario);
usuario.profesion = "Quimico farmaceutico"; // Añadir variable profesion
console.log(usuario);
