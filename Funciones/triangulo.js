/*. 2. IMPRIMIR UN TRIANGULO DE NUMEROS
CREAR UNA FUNCION trianguloNumerico(filas) que imprima un triangulo donde cada fila tenga numeros del 1 hasta el numero de la fila actual 

output:
1
12
123
1234
12345

funcion con 1 parametro
necesito una variable tipo texto donde almacenar la informacion
necesito un loop que recorra desde 0 hasta el parametro
necesito otro loop que me imprima el contenido de cada fila
ese loop va desde j hasta i
console.log(variabletipotexto += j)
*/



function trianguloNumerico(filas) {

    for (let i = 1; i <= filas; i++) {
        let triangulo = " ";
        // console.log(i)
        for (let j = 1; j <= i; j++) {
            j = j + " "
            triangulo += j

        }
        console.log(triangulo)

    }
}
trianguloNumerico(8)

