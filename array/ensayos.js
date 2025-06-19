let frutas = ['manzana', 'banana', 'fresa', 'Naranja'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

frutas.forEach(element => {
    console.log(element)
});



for (const key in frutas) {
    console.log(frutas[key]);
}

frutas.splice(1, 1);
console.log(frutas);


