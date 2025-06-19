let frutas = ['manzana', 'banana', 'fresa', 'Naranja'];
let numeros = [1, 2, 3, 4, 5];
let personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Ana', edad: 25 },
    activo = true,
];

console.log(typeof personas[2])
for (const key in personas) {
    console.log(key)
    console.log(personas[key])
}

for (const element in frutas) {
    console.log(element)
    console.log(frutas[element])
    if(frutas[element] === "fresa"){
        console.log(element)
    }
}

const fruta = frutas.find (function(element) {
        return element === "banana";
    
});
console.log(fruta)