// insertar 1 elemento desde el indice 2 

let frutas = ['manzana', 'banana', 'fresa', 'Naranja'];

frutas.splice(1, 2);
console.log(frutas);

//insertar "kiwi" en el indice 1 (sin eliminar)
frutas.splice(1, 0, 'kiwi');
console.log(frutas)

// reemplazar un elemento en el indice 2
frutas.splice(2, 1, 'aguacate')
console.log(frutas)