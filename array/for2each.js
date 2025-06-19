const numeros = [10, 20, 30];
let suma = 0;
//sumar numeros

const sumarNumeros = numeros.forEach((num) => {
    suma += num
})
console.log(suma)

const usuarios = [
  { id: 1, nombre: "Ana", edad: 25 },
  { id: 2, nombre: "Luis", edad: 30 },
  { id: 3, nombre: "Marta", edad: 28 }
];

const forusuarios = usuarios.forEach((usuario) => {   //modificar un propiedad
    usuario.nombre = `Sra. ${usuario.nombre}`;
});
console.log(usuarios);

//filtrr datos y guardar en otro arreglo

const usuarios2 = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" }
];

const arreglo = [];

const iteracion = usuarios2.forEach((prop)=>{
arreglo.push(prop.nombre);
})
console.log(arreglo)

const carrito = [
  { producto: "Camisa", precio: 20 },
  { producto: "Pantalón", precio: 30 },
  { producto: "Zapatos", precio: 50 }
];

let total = 0;

const totalCarrito = carrito.forEach((carri) => {
    total += carri.precio
})
console.log(total);

const productos = [
  { nombre: "Teclado", precio: 50 },
  { nombre: "Mouse", precio: 20 }
];

const productoscalculados = productos.forEach((producto) => {
    console.log(`${producto.nombre} - $${producto.precio}`)
})

const array1 = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" }
];

