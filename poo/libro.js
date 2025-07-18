/* 
Clase Libro
Propiedades:
Titulo
Autor
anioPublicacion
// ejercicio practico de una biblioteca
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

//HarryPotter.obtenerinfo()

const HarryPotter = new Libro("Harry el sucio potter", "Randy Daitona", 1930);
//console.log(HarryPotter)
//console.log(HarryPotter.disponible)
//console.log(Libro1.disponible)
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
    tomarPrestado(libroPrestado) { //añade un libro a librosPrestados si està disponible
        // console.log(libroPrestado)
        if (libroPrestado.disponible === true) {
            this.librosPrestados.push(libroPrestado)
            console.log(`${this.nombre} ha tomado prestado el libro: ${libroPrestado.titulo}`)
            libroPrestado.prestar()
        } else {
            console.log(`Este libro no està disponible`)
        }
        // y tiene que jeecutar el libro.prestar para cambiar la disponibilidad del libro
    }
    devolverLibro(libroPrestado) {
        //elimina un libro de librosPrestados y lo marca como disponible
        libroPrestado.devolver()
        this.librosPrestados = this.librosPrestados.filter(libros => libros !== libroPrestado)
        console.log(`${this.nombre} ha devuelto a la biblioteca el libro: ${libroPrestado.titulo}`);

        //le cambia la disponibilidad a libro.disponible a true
    }
}
const Juan = new Usuario("Juan", 1111)
const Maria = new Usuario("Maria", 2222)
const Anuel = new Usuario("Anuel", 3333)
const Maki = new Usuario("Maki", 4444)
const Juanki = new Usuario("Juanki", 5555)
const Niche = new Usuario("Niche", 6666)
/*Juan.tomarPrestado(HarryPotter);
Juan.tomarPrestado(LaBiblia);
Juan.tomarPrestado(LosExcursionistas);

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
Maria.tomarPrestado(LosExcursionistas)*/

//steigher.tomarPrestado(aqui le paso un libro) que el que va a tomar prestado el usuario de prueba
// steigher.librosPrestados

class biblioteca {
    constructor() {
        this.librosdebiblioteca = [];
        this.usuarios = []
    }
    agregarLibro(unLibro) { //añade un libro al inventario
        this.librosdebiblioteca.push(unLibro)
    }
    registrarUsuario(unUsuario) { //añade un usuario al sistema
        this.usuarios.push(unUsuario)
    }
    buscarLibro(titulo) { //Busca un libro por titulo
        console.log(this.librosdebiblioteca.find((entradalibros) => entradalibros.titulo === titulo))
    }
}
const laBiblioteca = new biblioteca()
laBiblioteca.agregarLibro(HarryPotter)
laBiblioteca.agregarLibro(LaPutaDeBabilonia,)
laBiblioteca.agregarLibro(ElAmorEnLosTiemposDelColera)
laBiblioteca.agregarLibro(ElCodigoDaVinci)
laBiblioteca.agregarLibro(ElZorroYElCactus)
laBiblioteca.agregarLibro(LosExcursionistas)
laBiblioteca.agregarLibro(LaBiblia)
laBiblioteca.registrarUsuario(Juan)
laBiblioteca.registrarUsuario(Maria)
laBiblioteca.registrarUsuario(Niche)
laBiblioteca.registrarUsuario(Juanki)
laBiblioteca.registrarUsuario(Maki)
laBiblioteca.registrarUsuario(Anuel)

Juan.tomarPrestado(ElCodigoDaVinci);
Juan.tomarPrestado(ElAmorEnLosTiemposDelColera)
Maria.tomarPrestado(ElZorroYElCactus)
console.log(Juan.librosPrestados)

console.log(laBiblioteca)
laBiblioteca.buscarLibro("El codigo da vinci")
laBiblioteca.buscarLibro("El zorro y el cactus")




//si le hacemos un console.log a biblitoeca deberia tener un atributo que s ellame libros y tenga los libros que se agregaron
//console.log(usuario1.tomarPrestado(libro1)) "Ana ha tomado prestado el libro "cien años de soledad"
//console.log(biblioteca.buscarLibro("el principito")) : El principito - autor
//console.log(usuario1.devolverLibro(libro1)) //Ana ha devuelto el libro "tal"