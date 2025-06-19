function saludar(nombre) {
    console.log("Bienvenido " + nombre)
}

saludar("Yeison");
console.log("-------------")
function sumar (a, b){
    return a + b;
}
console.log("-------------")
let resultado = sumar(3, 5);
console.log(resultado);

resultado = sumar(4, 9)
console.log(resultado);

console.log("-------------")

function saludar(nombre = "invitado"){
    console.log("Bievenido " + nombre);
}
saludar ("Makinero")
saludar()

console.log("------------")

const saludarchekechoko = () => {
    console.log("Hola makinota")
}

saludarchekechoko()
console.log("------------")

const saludar2 = (nombre) => {
    console.log("Hola papito " + nombre)
}
saludar2 ("Yeison")

console.log("------------")

const sumari = (a, b) => a + b

console.log(sumari(19, 1));
console.log("------------")

function esMayorDeEdad (edad){
    return edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
}
console.log(esMayorDeEdad(24));
console.log("------------")

const numeropar = numero => numero % 2 === 0 ? "Es un numero par" : "Es un numero impar";

console.log(numeropar(100))
console.log("------------")

function contar(numero) {
  if (numero <= 0) {
    console.log("¡Listo!");
    return; // 🔚 Caso base: ya no seguimos
  }

  console.log(numero);         // Mostramos el número
  contar(numero - 1);          // 🔁 Llamada recursiva
}

contar(3);

function cuentaRegresiva (algunnumero){
    if (algunnumero <= 0){
        console.log("Despegamos");
        return;
}
console.log(algunnumero)
cuentaRegresiva (algunnumero - 1)
}
cuentaRegresiva (5)













function skip (number){
    if (number == 6){
        console.log("Skip add")
        return;
    }
    console.log(number)
skip (number + 1)
} 


skip (1)

console.log("--------------")

for (let i = 1; i <= 5; i++) {
  console.log(i);
  }
console.log("--------------")
  let i=1

  while (i <= 5){
    console.log(i);
    i++;
  }

  console