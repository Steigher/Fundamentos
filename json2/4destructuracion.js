/* Destructuracion de objetos
Dado el objeto -producto-
const producto = {
    id: 1,
    nombre: "Laptop",
    precio: 999.99,
    stock: 10, 
}; 
Usa destructuracion para extraer nombre y precio.
Crear una funciòn formartearProducto que retorne: "Producto: [nombre], Precio: $[precio]"
*/


const producto = {
    nombre: "Laptop",
    precio: 999.99,
    stock: 10,
    formatearProducto: function () { //funcion
        console.log("Producto:", this.nombre, ", Precio:", this.precio)
    }
};

const { nombre, precio } = producto; //Desestructuración de objeto
console.log(nombre);
console.log(precio);


producto.formatearProducto() //Ejecutar funcion
