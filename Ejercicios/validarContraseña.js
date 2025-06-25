/* EJERCICIO 1: VALIDACIÒN CONTRASEÑA SEGURA
Crear una función validarContraseña(contraseña) que retorne true si la contraseña cumple:
Longitud >= 8 caracteres, al menos 1 mayuscula, 1 minuscula, 1 numero, no contiene espacios
Ejemplo: "Abc12345" : true, hola : fals*/

// metodo length

function validarContrasena(contrasena) {
    const splitContrasena = contrasena.split("") //convierte el string en un array
   // console.log(splitContrasena)
    let letraMayuscula = false
    let letraMinuscula = false
    for (let i = 0; i < contrasena.length; i++) {
       // console.log(contrasena[i]);
       // console.log(contrasena[i].toUpperCase());
        if (contrasena[i] !== contrasena[i].toLowerCase()) {
            letraMayuscula = true
        } 
        if (contrasena[i] !== contrasena[i].toUpperCase()) {
            letraMinuscula = true
        }
    }
    if ((contrasena.length >= 8) && !(contrasena.includes(" ")) && splitContrasena.some(num => num % 1 === 0) && letraMayuscula && letraMinuscula) {
        return true
    }
    return false
}
console.log(validarContrasena("Steanpower2"))


let contrasena = "steanpower1"
function contrasenaMayuscula(contra) {
    for (let i = 0; i < contra.length; i++) {
        console.log(contra[i]);
        console.log(contra[i].toUpperCase());
        if (contra[i] == contra[i].toUpperCase()) {
            return true
        }
    }
    return false
}
console.log(contrasenaMayuscula(contrasena));
