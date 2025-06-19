/* Acceso dinamico a atribucos

Crear una funcion obtenerValor(obj, key) que retorne el valor
de cualquier atributo de un objeto obj usando una variable key

output:
const persona = {nombre: "carlos", edad:39};
console.log(obtenerValor(persona, "edad")); // 30 */

function obtenerValor(obj, key) {
    return obj[key]
}

let usuario = {
    nombre: "El papu",
    nickname: "Spahalski",
    edad: "27",
    email: "tikitaka@gmail.com",
  
}
console.log(obtenerValor(usuario, "nombre"))
console.log(obtenerValor(usuario, "edad"))
