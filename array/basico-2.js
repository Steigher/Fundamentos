let personas = [
  { nombre: 'Juan', edad: 30 },
  { nombre: 'Ana', edad: 25 }
];

let personasMayores = personas.map((element) => {
  if (element.edad >= 30) {
    element.mayor = true;
  }
  return element;
});

console.log(personasMayores);
