// crear una funcion que formatee un nombre
//convertir la primer letra en mayuscula y el resto en minuscula 
// eliminar espacios extras al inicio y al final



function uppernombre(nombre) {

    const nombretrim = nombre.trim()
    console.log(nombretrim[0].toUpperCase() + nombretrim.slice(1))

}

uppernombre(" reinaldo ")
