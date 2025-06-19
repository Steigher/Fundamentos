const productos = [
  { id: 1, nombre: "Camisa", precio: 20 },
  { id: 2, nombre: "Pantalón", precio: 30 }
];

const nuevosPrecios = [
  { id: 2, precio: 35 },
  { id: 1, precio: 25 }
];

productos.forEach((producto) => {
  const precioActualizado = nuevosPrecios.find((item) => item.id === producto.id);
  if (precioActualizado) {
    producto.precio = producto.precio - precioActualizado.precio; // Modifica directamente
  }
});

console.log(productos);