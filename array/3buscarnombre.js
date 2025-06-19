/* Buscar un producto por un nombre
dado un array 'productos', buscar un producto por su nombre y mostrar sus detalles. Si no existe, mostrar "No encontrado"
output: 
buscarProducto (productos, "Mouse");
id: 1, nombre ....
"teclado" : No encontrado */

const productos = [
    { id: 1, nombre: "Laptop", precio: 1000 },
    { id: 2, nombre: "Mouse", precio: 20 },
];

const encontrarProd = productos.find((element) => (element.nombre === "Laptop"))

console.log(encontrarProd);

//No me gusta este codigo


