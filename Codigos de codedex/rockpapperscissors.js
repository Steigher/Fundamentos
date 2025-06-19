// Write code below 💖

// un jugador que al azar saca 0, 1 o 2
// una computador que saca 0, 1 y 2
// mi variable es el jugador y la computador y el numero que saca
// necesito una funciòn que arroje un numero entre 0, 1 y 2
// una vez con el numero al azar arrojado, la consola me debe arrojar un juego de piedra papel o tijera

// 0 = rock   -  1 = pappers    - 2 = cissors
let numeroPlayer = Math.floor(Math.random() * 3)
let numeroComputer = Math.floor(Math.random() * 3)


if (numeroPlayer > 1){
  console.log("Player 1 drops Cissors")
} else if(numeroPlayer >0){
  console.log("Player 1 drops Pappers")
} else {
  console.log("Player 1 drops Rock")
}

if (numeroComputer > 1){
  console.log("Computer drops Cissors")
} else if(numeroComputer >0){
  console.log("Computer drops Pappers")
} else {
  console.log("Computer drops Rock")
}

if (numeroPlayer == numeroComputer){
  console.log ( "Is a draw");
} else if(numeroPlayer == 0 && numeroComputer == 1){
  console.log("Papper beats Rock = Computer wins");
} else if (numeroPlayer == 1 && numeroComputer == 2){
  console.log("Cissors beats Pappers = Computer Wins")
} else if (numeroPlayer == 2 && numeroComputer == 1){
  console.log("Cissors beats pappers = Human Player wins")
} else if (numeroPlayer ==2 && numeroComputer == 0){
  console.log("Rock beats Cissors = Computer wins")
} else if (numeroPlayer ==0 && numeroComputer ==2){
  console.log("Rock beats Cissors = Human wins")
} else {
  console.log ("Pappers beats rock = Human player wins")
}