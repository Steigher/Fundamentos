// ejercicio practico de una biblioteca
/* 
Clase Libro
Propiedades:
Titulo
Autor
anioPublicacion
disponible (true)

Metodos
prestar(): Cambia disponible a false
devolver(): cambia disponible a true
obtenerInfo(): retorna un string con los datos del libro
*/

class Libro {
    constructor(titulo, autor, aniopublicacion) {
        this.titulo = titulo;
        this.Autor = autor;
        this.anioPublicacion = aniopublicacion;
        this.disponible = true;
        this.disponibilidad = "";
    }
    prestar() {
        this.disponible = false;
    }
    devolver() {
        this.disponible = true;
    }
    obtenerinfo() {
        if (this.disponible === true) {
            this.disponibilidad = "Está disponible"
        } else if (this.disponible === false) { this.disponibilidad = "No está disponible" }
        console.log(`El libro que tenemos es ${this.titulo} del autor ${this.Autor}, que fue publicado en el año ${this.anioPublicacion} y su estado es: ${this.disponibilidad}`)
    }
}

//console.log(Libro1)
//HarryPotter.obtenerinfo()
//console.log(Libro1.disponible)

const HarryPotter = new Libro("Harry el sucio potter", "Randy Daitona", 1930);
console.log(HarryPotter.disponible)
const ElCodigoDaVinci = new Libro("El codigo da vinci", "Dan brown", 2010)
const LosExcursionistas = new Libro("Los Excursionistas", "QuienSabe", 2008)
const LaPutaDeBabilonia = new Libro("La puta de babilonia", "Mario Vargas Llosa", 2016)
const ElAmorEnLosTiemposDelColera = new Libro("El amor en los tiempos del colera", "Gabriel Garcia Marquez", 2001)
const LaBiblia = new Libro("La biblia", "Yisus", 800)
const ElZorroYElCactus = new Libro("El zorro y el cactus", "Rafael Pombo", 2000)




class Usuario {
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
        this.librosPrestados = [];
    }
    tomarPrestado(libroPrestado) {
        //añade un libro a librosPrestados si està disponible
        // console.log(libroPrestado)
        if (libroPrestado.disponible === true) {
            this.librosPrestados.push(libroPrestado)
            libroPrestado.prestar()
        }
        // y tiene que jeecutar el libro.prestar para cambiar la disponibilidad del libro
        // if (Libro1.disponible === true){}
    }
    devolverLibro(libroPrestado) {
        //elimina un libro de librosPrestados y lo marca como disponible
        libroPrestado.devolver()
        this.librosPrestados = this.librosPrestados.filter(libros => libros !== libroPrestado)
        //le cambia la disponibilidad a libro.disponible a true
    }
}

const Juan = new Usuario("Juan", 1111)
const Maria = new Usuario("Maria", 2222)
Juan.tomarPrestado(HarryPotter);
Juan.tomarPrestado(LaBiblia);
Juan.tomarPrestado(LosExcursionistas);

//Juan.tomarPrestado(ElCodigoDaVinci);
console.log(Juan, "----");
//console.log(HarryPotter);
Juan.devolverLibro(HarryPotter, "---");
//console.log(HarryPotter);
console.log(Juan, "---------");
console.log(HarryPotter);
Juan.tomarPrestado(ElZorroYElCactus)
console.log(Juan);
Juan.devolverLibro(ElZorroYElCactus)
console.log((Juan));
Maria.tomarPrestado(LosExcursionistas)

//steigher.tomarPrestado(aqui le paso un libro) que el que va a tomar prestado el usuario de prueba
// steigher.librosPrestados