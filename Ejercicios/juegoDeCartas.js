/*Ejercicio 5: juego de cartas "21" simplificado
Problema: Crea una funciòn jugar21(cartas) que reciba un array de números (cartas)y retorne:
"Ganas": Si la suma es exactamente 21
"Pierdes": Si la suma supera 21
"Continúas": Si la suma es menor a 21
*/
const numeros = [];
function jugar21(cartas) {
    let sumaCartas = 0;
    /*console.log(cartas);
    sumaCartas = cartas[0];
    sumaCartas += cartas[1]
    sumaCartas += cartas[2]
    console.log(sumaCartas);
    */
    for (let i = 0; i < cartas.length; i++) {
        console.log(cartas[i]);
        sumaCartas += cartas[i]
        console.log(sumaCartas);
    }
    if (sumaCartas === 21) {
        return "Ganas"
    } if (sumaCartas > 21) {
        return "Pierdes"
    } else {
        return "Contínuas"
    }

}

console.log(jugar21([10, 5, 6]));
console.log(jugar21([10, 11, 2]));
console.log(jugar21([10, 10, 0]));