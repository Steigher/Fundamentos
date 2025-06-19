/* actuaizar sl tock de productos
Enunciado: Dado un array 'productos' y un array 'ventas' (con 'idProducto' y 'cantidad), actualizar el stock restando las unidades vendidas
output:
actualizarStock(productos, ventas);
console.log(productos);
id 1, nombre: camisa: cantidad 7 */

const productos = [
    { id: 1, nombre: "Camisa", stock: 10 },
    { id: 2, nombre: "Pantalòn", stock: 5 },
];

const ventas = [
    { idProductos: 1, cantidad: 3 },
    { idProductos: 2, cantidad: 2 },
];
// primer paso, seria hallar un metodo para relacionar el stock con la cantidad, usando como referencia el id

//iterar el productos 

const iterarProductos = productos.forEach((producto) => {
    //busco  las ventas dentro del producto para poder asociarlos
    const iterarVentas = ventas.find((venta) => venta.idProductos == producto.id);
    if (iterarVentas) {
        producto.stock -= iterarVentas.cantidad
    }
})
console.log(productos)




//modificar el stock segun las ventas realizadas
const productos2 = [
    { id: 1, nombre: "Camiseta", stock: 50 },
    { id: 2, nombre: "Pantalón", stock: 30 },
    { id: 3, nombre: "Zapatos", stock: 20 }
];

const ventas2 = [
    { productoId: 1, unidades: 10 },
    { productoId: 3, unidades: 5 }
];

const iterarProducto = productos2.forEach((producto) => {  //con esto ya itero las propiedades dentro de productos2
    const encontrarVentas = ventas2.find((venta) => venta.productoId === producto.id)
    if (encontrarVentas) {
        producto.stock = encontrarVentas.unidades
    }
});
console.log(productos2);


/*📌 Ejercicio 2: Asignar roles a usuarios
Problema:
Tienes un arreglo usuarios con información básica y otro arreglo roles que define permisos.
Asigna el rol correspondiente a cada usuario (si existe un rol para ese userId).
Si un usuario no tiene rol asignado, agrega la propiedad rol: "invitado".
Arreglos iniciales: */

const usuarios = [
    { userId: 101, nombre: "Ana" },
    { userId: 102, nombre: "Luis" },
    { userId: 103, nombre: "Marta" }
];

const roles = [
    { userId: 101, rol: "admin" },
    { userId: 103, rol: "editor" }
];


const iterarUsuarios = usuarios.forEach((usuario) => {
    const encontrarRoles = roles.find((role) => role.userId === usuario.userId);
    if (encontrarRoles) {
        usuario.rol = encontrarRoles.rol
    } else {
        usuario.rol = "invitado"
    }
})
console.log(usuarios)

