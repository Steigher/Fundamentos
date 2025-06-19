//crear una funciòn cuadradoDeCaracteres(lado, caracter) que imprima un cuadrado de lado x lado usando el simbolo caracter

// cuadradoDeCaracteres(3, '#')
//
//output:
//###
//###
//###
function hacerCuadrado(number, caracter) { // con function
    for (let i = 0; i <= number; i++) {
        let cuadrado = "";

        for (let j = 0; j < number; j++) {
            cuadrado += caracter

        }
        // console.log(cuadrado)
    }

}
hacerCuadrado(3, "*")


let number9 = 3          // sin function
for (let i = 0; i <= number9; i++) {
    let cuadrado = "";
    for (let j = 0; j < number9; j++) {
        cuadrado += "*"
    }
    //  console.log(cuadrado)
}



// con retorno
/*function hacerCuadrado1(number, caracter) {
    let todoElCuadro =""
    for (let i = 0; i < number; i++) {
        let cuadrado1 = "";

        for (let j = 0; j < number; j++) {
            cuadrado1 += caracter

        }
        console.log(cuadrado1)
    }

}
hacerCuadrado1(3, "*")
console.log("-----------------")
hacerCuadrado1(5, "#")*/



let number1 = 4
for (let i = 0; i <= number1; i++) {
    let cuadrado = "";
    for (let j = 0; j < number1; j++) {
        if (i !== 0 && i !== number1) {
            cuadrado = "*   *";
        }
        else {
            cuadrado += "*";

        }
    }
    //console.log (cuadrado)
}

let number2 = 4
for (let i = 0; i <= number2; i++) {
    let cuadrado = "";
    for (let j = 0; j < number2; j++) {
        if (i % 2 !== 0) {
            cuadrado = " * *";
        }
        else {
            cuadrado = "* *";

        }
    }
    //console.log (cuadrado)
}

//Rombo de caracteres
//Imprimir un rombo (diamante) de lado n usando el carácter.
//romboDeCaracteres(3, '*');  
// Output:  
//   *  
//  ***  
// *****  
//  ***  
//   *  

let number3 = 3
for (let i = 0; i <= number3; i++) {
    let cuadrado = "";
    let espacios = "----"
    for (let j = number3; j >= 0; j--) {
        espacios += "-";
    }

    //  console.log (espacios)
}



/* output
****
$$$$
****
$$$$ 
*/

// con retorno
/*function hacerCuadrado1(number, caracter1, caracter2) {
    let todoElCuadro = ""
    for (let i = 0; i < number; i++) {
        let cuadrado1 = "";
        if (i % 2 === 0) {
            for (let j = 0; j < number; j++) {
                cuadrado1 += caracter1
            }
        }
        else {
            for (let j = 0; j < number; j++) {

                cuadrado1 += caracter2
            }
        }
        console.log(cuadrado1)

    }
}
hacerCuadrado1(4, "*", "$")
console.log("-----------------")
hacerCuadrado1(2, "*", "$")*/

/*function hacerCuadrado1(number, caracter1, caracter2) {
    for (let i = 0; i < number; i++) {
        let cuadrado1 = "";
        for (let j = 0; j < number; j++) {
            if (i % 2 === 0) {
                cuadrado1 += caracter1
            }
            else {
                cuadrado1 += caracter2
            }
        }
        console.log(cuadrado1)
    }

}
hacerCuadrado1(8, "*", "$")
console.log("-----------------")
hacerCuadrado1(2, "*", "$")*/


// HACER OTRO CON EL CUADRO DE AJEDEREZ