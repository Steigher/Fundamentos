/*Modelar un coche
Clase Coche con : propiedades : marca, velocidadActual. Metodos: acelerar(), frenar().
- El constructor solo recibe la marca
- Crear 3 coches con marca distinta
- Acelerar suma +1 a la velocidad actual
- Frenar vuelve a 0 la velocidadActual*/
const coches = [
    { marca: "BMW", velocidad: 3 },
    { marca: "Ferrari", velocidad: 5 },
    { marca: "Chevrolet", velocidad: 1 }
];
class Coche {
    constructor(marca) {
        this.marca = marca;
        this.velocidadActual = 0;
    }
    acelerar() {
        const cocheAcelerado = coches.find((element) => element.marca === this.marca)
        //console.log(cocheAcelerado.velocidad)
        if (cocheAcelerado.marca === this.marca) {
            this.velocidadActual += cocheAcelerado.velocidad
        }
        console.log(`velocidad del ${this.marca} aumentada a ${this.velocidadActual} km / h. (Velocidad actual ${this.velocidadActual}km / h)`);
    }
    frenar() {
        this.velocidadActual = 0;
        console.log(`Coche frena.Velocidad actual del ${this.marca} es: ${this.velocidadActual} `);
    }
}


const BMW = new Coche("BMW");
const Ferrari = new Coche("Ferrari");
const Chevrolet = new Coche("Chevrolet");

BMW.acelerar()
BMW.acelerar()
BMW.acelerar()
Ferrari.acelerar()
Ferrari.frenar()
Ferrari.acelerar()
Chevrolet.acelerar()



/*function acelerar(marcaCoche){
    if(coches.find((marca) => marca.marca === marcaCoche)){
        console.log(encontrarMarca.velocidadActual);
    }
    //buscar en el array de marcas, la marca del objeto actual
    //cuando encuentra el json marcas (findindex, .find) obtiene la velocidad
    //suman la velocidad a la velocidad actual
}*/
//console.log(acelerar("BMW"));

