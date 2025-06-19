//crear un patròn qde 3 lineas que genere:
//1
//22
//333
//mi segundo numero debe ser otro caracter igual al de la linea


for (let x = 0; x <= 3; x++) {
        let linea = ""

        for (let c = 0; c <= x; c++) {
                linea += x
        }
        //  console.log (linea) 

}

for (let a = 5; a <= 10; a++) {
        let lin = "";

        for (let s = 5; s <= a; s++) {
                lin += a;

        }
        console.log(lin)
}


console.log("------------")

function evaluarNumero(number) {
        if (number % 2 == 0) {
                return ("Es par");

        } else {
                return ("Es impar")
        }
}
console.log(evaluarNumero(5))


function paroq(unnumero) {
        if (unnumero == 0) {
                return ("Es zeroo");
        }
        else if (unnumero % 2 == 0 && unnumero > 0) {
                return ("Positivo y par");
        }
        else if (unnumero % 2 == 0 && unnumero < 0) {
                return (" Negativo y par");
        }
        else if (unnumero % 2 == 1 && unnumero > 0) {
                return ("Positivo e impar")
        }
        else {
                return ("negativo e impar")
        }
}
console.log(paroq(2))


//Crear una funciòn donde se sumen todos los numero impares, entre inicio y fin incluyendo los impares
//detectar los numeros impares dentro de un rango
// que se genere una suma de estos numeros
//¿Qué variable guardará la suma?
//¿Cómo sabrás si un número es impar?
//¿Dónde actualizas la suma?
//¿Qué haces al final de la función?

function sumarImpares(inicio, fin) {
        let suma = 0
        for (let i = inicio; i <= fin; i++) {
                if (i % 2 !== 0) {
                        suma += i
                }

        }
     return(suma);
}
 console.log( sumarImpares(1, 5))

//crear for que vaya del 1 al 5
//un log que muestre el index, tiene que mostrar 1, 2 , 3, 4, 5
//identificamos los impares variable % 2 !== 0
//suman en la variable solo los numeros impares
//mostrar el resultado


let suma = 0
for (let i = 1; i <= 3; i++) {
       suma += i;
}
 console.log(suma)