let frutas = ['manzana', 'banana', 'fresa', 'Naranja'];

frutas.push('kiwi'); // Agrega 'kiwi' al final del array

console.log(frutas); // Imprime el array actualizado

frutas.pop(); // Elimina el último elemento del array

console.log(frutas);

//forEach no retorna nada, solo itera sobre el array
const otrasFrutas = frutas.forEach((element) => {
  console.log(element);
});


for (const key in frutas) {
  console.log(frutas[key])
}


//console.log(otrasFrutas);

const otrasFruta2 = frutas.map((element) => {
  if (element === 'Naranja') {
    return 'Pera';
  } else {
    return element;
  }
});

console.log(otrasFruta2);


