/*const producto= {
    nombre: "Laptop",
    precio: 1200,
    stock: 5,
};

1.añade la propiedad 'marca' con valor "HP"
2. REduce el precio en 10%
3. elimina la propiedad stock */

const producto = {
  nombre: "Laptop",
  precio: 1200,
  stock: 5,
}

producto.marca = "HP" //agrego un atributo

console.log(producto);

producto.precio = producto.precio * 0.9 // reduzco el precio en 10%

console.log(producto)

delete producto.stock; // borro un atributo

console.log(producto)