/* 2. CALCULAR EL TOTAL DE UN CARRITO
enunciado: DAdo un array 'carrito' con objetos que tienen precio y cantidad, calcular el total a pagar
output: 'calcularTotal' : 70*/

const carrito = [
    {producto: "Camisa", precio: 20, cantidad: 2},
    {producto: "Pantalon", precio: 30, cantidad: 1},
];


const calcularTotal = carrito.reduce((acc, value) => acc + (value.precio * value.cantidad), 0); 
console.log(calcularTotal)

