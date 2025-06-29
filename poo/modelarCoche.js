/*Modelar un coche
Clase Coche con : propiedades : marca, velocidadActual. Metodos: acelerar(), frenar().
- El constructor solo recibe la marca
- Crear 3 coches con marca distinta
- Acelerar suma +1 a la velocidad actual
- Frenar vuelve a 0 la velocidadActual*/
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
BMW.acelerar()
BMW.acelerar()
BMW.acelerar()
BMW.acelerar()
BMW.acelerar()
Audi.acelerar()
Audi.acelerar()
Audi.frenar()
Audi.acelerar()