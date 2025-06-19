let frutas = ['manzana', 'banana', 'fresa', 'Naranja'];
let numeros = [1, 2, 3, 4, 5];
let personas = [
  { nombre: 'Juan', edad: 30 },
  { nombre: 'Ana', edad: 25 },
  {cedula: '123456789'},
  {Activo: true},
];
console.log(frutas.length)

for (const index in frutas) {
  if (frutas[index] === 'naranja') {
    console.log(index);
  }
}

let naranja = frutas.find((element) => element === 'Naranja');
console.log(naranja);



let cedula = '123456789'
let ana = personas.find((element) => element.cedula === cedula);
console.log(ana);

