// variable tipo texto : "Hola"
//buscar letra a y retornar la posicion en la que se encuentra
//buscarLetraA(texto)
//output: 3

//const posicion = texto.indexOf(letra); // Devuelve 1



function buscarLetraA(texto, letra) {
    return texto.indexOf(letra)
}
console.log(buscarLetraA("Cabezona", "a"))



function encontrarLetra(palabra, letrao) {
    for (let i = 0; i <= palabra.length; i++) {
        if (palabra[i] === letrao) {
            console.log(i)
        }

    }

}

encontrarLetra("Hola", "a")