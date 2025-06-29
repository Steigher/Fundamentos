class Coche {
    constructor(marca) {
        this.marca = marca;
        this.velocidadActual = 0;
    }
    acelerar() {
        this.velocidadActual += 10;
        console.log(`velocidad aumentada en 10km/h. (Velocidad actual ${this.velocidadActual}km/h)`);
    }
    frenar() {
        this.velocidadActual = 0;
        console.log(`Coche frena. Velocidad actual: ${this.velocidadActual}`);
    }
}
const BMW = new Coche("BMW");
const Audi = new Coche("Audi");
const Mazda = new Coche("Mazda");

/* BMW + 3 de velocidad, Ferrari de +5 de velocidad, Chevrolet +1*/
const coches = [
    {marca : "BMW", velocidadActual: 0, acelerar(){this.velocidadActual+=3; console.log(`el coche ${this.marca} tiene una velocidad actual de ${this.velocidadActual} km/h`)}},
    {marca: "Ferrari", velocidadActual:0, acelerar(){this.velocidadActual+=5;console.log(`el coche ${this.marca} tiene una velocidad actual de ${this.velocidadActual} km/h`)}},
    {marca: "Chevrolet", velocidadActual: 0, acelerar(){this.velocidadActual+=1;console.log(`el coche ${this.marca} tiene una velocidad actual de ${this.velocidadActual} km/h`)}}
];

coches[0].acelerar();
coches[1].acelerar();
coches[2].acelerar();
console.log("-------");
coches[0].acelerar();
coches[1].acelerar();
coches[2].acelerar();