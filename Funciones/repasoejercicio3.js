//funcione que sume impares de principio a finall
//funcion, con 2 parametros que sume los numeros impares
//un variable acumuladora para la suma 
// un bucle que recorre todos los numeros desde a hasta b
// una condicion que detecte si el numero es impar

let resultado = 0

function sumarimpar(a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 2 !== 0)
            resultado += i

    }
    return resultado
}
console.log(sumarimpar(1, 5))

// los impares se suman normal, en su propio numero
//y los pares se suman en su numero propio + 2
// 1 + 4 + 3 + 6 + 5 = 19
// 1 + 4 + 3 + 6 + 5 + 8 + 7= 30

let resultado1 = 0


function sumarpar2(a, b) {
    for (let i = a; i <= b; i++) {
        console.log("----------------")
        if (i % 2 !== 0) {
            resultado1 += i;
            console.log(i + ". " +  resultado1)
            
        } else { 
            let resultadoanterior = resultado1
            resultado1 = resultado1 + i + 2;
            console.log(i + ". " + resultadoanterior, "+" ,i, "+", "2", "=", resultado1)
        }
        console.log("----------------")
    }
   
    return resultado1
}
console.log(sumarpar2(1, 5))
// 1. 1 
// 2. 1 + 2 + 2 = 5
// 3. 5 + 3 = 8
// 4. 8 + 4 + 2 = 14
// 5. 14 + 5 = 19




