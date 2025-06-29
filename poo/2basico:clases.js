class persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad}`);
    }
}
const persona1 = new persona("Juan", 30);
const persona2 = new persona("Ana", 18);
console.log(persona1);
console.log(persona2);

persona1.saludar()

console.log("------------------");

/*Crear clase Animal con propiedades nombre y sonido 
y un metodo haceSonido()*/

class Animal {
    constructor(nombre, sonido, tipoanimal) {
        this.nombre = nombre;
            this.sonido = sonido;
            this.tipoanimal = tipoanimal
    }
    haceSonido() {
        console.log(`${this.nombre} es un ${this.tipoanimal} y hace ${this.sonido}!`);
    }
}
const animal1 = new Animal("Garfield", "miau", "gato");
const animal2 = new Animal("Scooby", "guauu", "gerro");
const animal3 = new Animal("El pajaro loco", "tucu tucu", "pajaro");

animal1.haceSonido();
animal2.haceSonido();
animal3.haceSonido();
