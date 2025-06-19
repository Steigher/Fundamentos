/*LEAN Y CONSULTEN QUE HACE EL typeof Y COMO IMPLEMENTARLO EN JAVASCRIPT PARA HACER ESTE EJERCICIO
*/
const persona = {
    nombre: 'Juan',
    edad: 30,
    profesion: 'Desarrollador',
    animal: "cacatua",
    activo: true,
    pasivo: false,
};

function contarTipoPropiedades(obj, tipo) {
    let contador = 0;
    for (let key in obj) {
        if (typeof obj[key] === tipo) {
            contador++;
        }
    }
    return contador;
}

console.log(contarTipoPropiedades(persona, "boolean"))

/*let contador = 0;
for (let key in persona) {
    if (typeof persona[key] === "string") {
        console.log(key)
        console.log(contador += 1)
    }
}*/
