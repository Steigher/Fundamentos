//crear un metodo que cuente cuantas letras hay en la palabra
//output:
// contarLetra ("murcielago", "u"); 1
// contarLetra ("Panda", "a"); 2


function contarLetra(palabra, letra) {
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
        
       // console.log(i)
        if(palabra[i] === letra){
            contador ++;
        } 
    }
    return contador;
}
console.log(contarLetra("Murcielago", "u"));
console.log(contarLetra ("Panda", "a"));