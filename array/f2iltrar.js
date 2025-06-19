/* 1. Filtrar números pares
Dado el array [1, 2, 3, 4, 5, 6], crea un nuevo array que solo contenga los números pares.

*/

const numeros = [1, 2, 3, 4, 5, 6];

const filtrarNumeros = numeros.filter(num => num % 2 === 0);
console.log(filtrarNumeros);

/*2. Filtrar palabras largas
Dado el array ["sol", "cielo", "astronauta", "luna"], crea un nuevo array con las palabras que tengan más de 4 letras.*/

const palabras = ["sol", "cielo", "astronauta", "luna"];

const palabrasLargas = palabras.filter(pala => pala.length > 4)
console.log(palabrasLargas);

/*
for (const key in palabras) {
    console.log(key);
    console.log(palabras[key]);
    console.log(palabras[key].length);
    
    if (palabras[key].length > 4) {
        console.log(palabras[key])
    }
}
*/

/*3. Filtrar productos en stock
Dado el array de objetos:
Crea un nuevo array con los productos que tengan stock mayor a 0.*/

const productos = [
    { nombre: "Laptop", stock: 5 },
    { nombre: "Mouse", stock: 0 },
    { nombre: "Teclado", stock: 10 },
];

const productosMayor0 = productos.filter(producto => producto.stock > 0);
console.log(productosMayor0
);


/* INTERMEDIO

1. Filtrar usuarios activos
Dado el array de usuarios: 
Filtra solo los usuarios con activo: true y además su nombre tenga más de 3 letras.*/

const usuarios = [
    { id: 1, nombre: "Ana", activo: true },
    { id: 2, nombre: "Luis", activo: false },
    { id: 3, nombre: "Carlos", activo: true },
];

const usuariosFiltrados = usuarios.filter(usuario => (usuario.activo === true && usuario.nombre.length > 3));
console.log(usuariosFiltrados);

/*2. Filtrar números primos
Dado el array [2, 3, 4, 5, 6, 7, 8, 9, 10], filtra solo los números primos.
(Pista: Necesitarás una función auxiliar para verificar si un número es primo). */

const numerosPrimos = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosReprimos = numerosPrimos.filter(numerosprim => numerosprim % 2 !== 0 && numerosprim %3 !== 0 ); // no se dio/
console.log(numerosReprimos);

/*3. Filtrar tareas urgentes
Dado el array de tareas:
Filtra las tareas con prioridad "alta" o "urgente".*/

const tareas = [
  { id: 1, titulo: "Comprar pan", prioridad: "baja" },
  { id: 2, titulo: "Llamar al médico", prioridad: "alta" },
  { id: 3, titulo: "Entregar proyecto", prioridad: "urgente" },
];
const tareasUrgentes = tareas.filter(tarea => tarea.prioridad === "urgente");
console.log(tareasUrgentes);
