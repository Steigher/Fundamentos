//let texto = "Hola mundo"
//onsole.log(texto)


// Crear una funciòn contarRegresivo(num) que imprima nùmeros desde num hasta 1, pero omita todos los numeros divisibles por 3
// contarRegresivo (5)
//5
//4
//2
//1

// primero necesito un bucle que me recorra los numeros desde num hasta 1
//luego una condiciòn que haga que no me muestre los numeros divisibles por 3  : num % 3 == 0
//si esa condicion se cumple la variable va aumentando


function conteo() {
    let contarnumDivisible = 0;
    let contarnumNodivisible = 0;
    let numIteracion = 0
    let totalnumerosomitidos = 0
    let num = 0

    for (let i = 0; i <= num; i++) {
        if ((i % 3 !== 0) && (i % 2 == 0)) {
            console.log(numIteracion + ". " + i + ": Este numero es par")
            numIteracion += 1
        }
        else if ((i % 3 !== 0) && (i % 2 !== 0)) {
            console.log(numIteracion + ". " + i + ": Este numero es impar");
            contarnumNodivisible += 1;
            numIteracion += 1
        }
        else {
            console.log("Numero " + i + " Omitido")
            contarnumDivisible += 1;
            totalnumerosomitidos += i
        } if (totalnumerosomitidos < 100) {
            num ++
        }
    }
    console.log("Total numero divisibles " + contarnumDivisible)
    console.log("Total numeros no divisible " + contarnumNodivisible)
    console.log("Suma total de numeros omitidos " + totalnumerosomitidos)
}

conteo()


//mostrar numero divisible x 3 omitido
////Contar cuantos numeros fueron omitidos y mostrar al final: "Total de numeros omitidos n"
//contar total de numeros divisible
// Mostrar si el numero es par o impar
//retorne una funcion donde se sume el total de numeros omitidos
//const totalomitidos (
//ejecutar la funcion hasta que la suma del totalomitidos sea mayor o igual a 100)



