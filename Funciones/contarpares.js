/*CONTAR NUMEROS PARES EN UN RANGO

Enunciado:
Crear una funciòn contarPares(inicio,fin) que cuente cuantos numeros pares hay entre inicio y fin (incluyendolos)
ooutput:
console.log(contarPares(2, 10)) ; 5 (2, 4, 6, 8, 10)
console.log(contarPares(1, 5)) ; 2 (2, 4)


PSEUDOCODIGO
necesito una funcion que almacene 2 numeros
necesito un bucle que recorra esos dos numeros

mi output serà contar los numeros modulos de 2:    i % 2 === 0 

*/

function contarPares(numero1, numero2) {
    let cualesParesHay = "";
    let conteo = 0;
    for (let i = numero1; i <= numero2; i++) {
        // console.log(i);
        if (i === numero1 && i % 2 === 0) {
            cualesParesHay += i;
        } else if (i % 2 === 0) {
            cualesParesHay += " - " + i;
            conteo += 1
        }
        
    }
    console.log("Entre", numero1, "y", numero2, "los numeros pares son:", conteo, ":", cualesParesHay)
}
contarPares(2, 8)
contarPares(1, 5)

// No mostrar el guiòn final
