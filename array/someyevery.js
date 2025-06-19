// some() y every () : VALIDACIONES RAPIDAS
// some() : verifica si al menos un elemento cumple la condiciòn.
const numeros = [1, 3, 4];
const hayPares = numeros.some(number => {
    console.log(number);
    return number % 2 === 0
});
console.log(hayPares);

// every() verifica si todos los elementos cumplen las condiciones
const todosPares = numeros.every(num => num % 2 === 0);
console.log(todosPares);
