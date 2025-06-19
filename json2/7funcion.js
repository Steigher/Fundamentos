/*  Enunciado: Crear una función validarUsuario(usuario) que verifique 
si un objeto usuario tiene las propiedades obligatorias: El nombre tenga más de 2 letras, 
la edad sea > 0, y este activo. Retornar true si es valido y false si no.

const usuario1 = {nombre: "Ana", edad: 25, activo: true};
const usuario 2 ? {nombre: "Carlos", edad: 0};

console.log(validarUsuario(usuario1)); //true
console.log(validarUsuario(usuario2)); //false (edad <=0 y falta "activo") 
*/

function validarUsuario(usuario) {
  if (((usuario.nombre).length > 2) && (usuario.edad > 0) && (usuario.activo === true)) {
    return true
  } else {
    return false
  }
}


const usuario1 = {
  nombre: "Ana",
  edad: 25,
  activo: true,
}
const usuario2 = {
  nombre: "Carlos",
  edad: 0,
  activo: true,
}

console.log(validarUsuario(usuario1))
console.log(validarUsuario(usuario2))


