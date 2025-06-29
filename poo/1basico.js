console.log("Hola mundo!")


const personaje = {
    nombre: "Gandalf",
    skin: "superman",
    vida: 100,
    ataque: 10,
    defensa: 5,
    magia: 30,
    habilidades: ["luz", "fuego", "teletransportar"],
    inventario: [
        {nombre: "pocion", cantidad: 3},
        {nombre: "espada", cantidad: 1},
        {nombre: "escudo", cantidad: 1},
    ],
   // METODOS 
    atacar: function() {
    console.log (`${this.nombre} ataca con magia, daño magico: ${this.magia} `)
    }
}
personaje.atacar()
