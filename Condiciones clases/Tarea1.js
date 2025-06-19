
//Aplicar un descuento del 50% si el espectador es menor de 12 años o mayor de 60.
//Un espectador menor de 12 O mayor de 60 año
//Si este espectador aplica se le hace descuento del 50%
//si el espetador tiene otra edad no se le aplica desuento

let espectador = 6
let precio = 5000

if(espectador < 12 || espectador > 60){
    console.log("Se le aplica descuento del 50%");
    precio = precio*0.5;
    console.log("El nuevo precio es " + precio)
} else{
    console.log("No se aplica el descuento");
}


//Clasificar un número como "Positivo", "Negativo" o "Cero".
//Definir un numero = variable
//si el numero es menor a cero entonces "es negaativo"
//Si el numero es mayor a 0 entonces "es positivo"
//Si el numero es 0 entonces "Es zero"
console.log("------------------")
let numero = 4237

if (numero < 0) {
    console.log("Es negativo")
} else if (numero > 0){
    console.log("Es positivo")
} else (
    console.log("Zero")
)

//Permitir acceso si el usuario es "admin" o si es "invitado" y la contraseña es "1234".
//Variable= un usuario que sea admin o invitado
//Variable= Una contraseña de 4 numeros
//Si se cumplen las dos condiciones = "Permitir acceso"
//Si no se cumplen = "Acceso denegado"
console.log("------------------")
let usuario = "invitad"
let password = 1234

if((usuario == "invitado" || usuario == "admin") && (password == 1234)){
    console.log("Acceso permitido");
} else{
    console.log("Acceso denegado")
}

//Escribe las condiciones utilizando || && y ! para determinar si el usuario puede acceder
// Un sistema de streaming permite acceso a contenido exclusivo si:
//El usuario es premium o
//Tiene un codigo de invitaciòn valido 
//su suscripciòn no està vencida
console.log("------------------")
let isPremium = true
let codigovalido = true
let suscripcionvencida = false

if(isPremium || (codigovalido && !suscripcionvencida)){
    console.log("Acceso permitido");
} else{
    console.log("Acceso denegado");
}

//La puerta de un edificio se abre asì
//El usuario es empleado (true) Y tiene su tarjeta activa (!tarjetaBloqueada),
// Ò, Es invitado (true) Y el anfritiòn confirmò su visita (confirmacionanfitrion = true)
//
console.log("---------------")
let empleado = true
let tarjetaBloqueada = false
let invitado = true
let confirmacionanfitrion = true

if (empleado && !tarjetaBloqueada || (invitado && confirmacionanfitrion)){
    console.log("Se abre la puerta")
} else{
    console.log("Acceso denegado")
}

//Un cliente obtiene un descuento del 50% si es su primer compra 0 es cliente frecuente y compra mas de 100 usd, si el cliente no es miembro el descuento se reduce a la mitad
//Variable 1: La primer compra del cliente = true ||
//Var2: Es cliente frecuente (true) &&
//Var3. compra mas de 100 (>100);
//var4. Si no es miembro (!esMiembro) el descuento es del 25%
console.log("-----------------")

let primeraCompra = true
let clienteFrecuente = true
let compra = 400
let miembro = false
let descuento = 0

if (primeraCompra || (clienteFrecuente && compra > 100)) {
  descuento = 0.5;
} else if (!miembro) {
  descuento = 0.25;
}
console.log("El descuento es de: " + (descuento * 100) + "%");

//if (primeraCompra || (clienteFrecuente && compra > 100)){
  //  console.log("El cliente obtiene descuento del 50%, en total paga " + compra * 0.5)
//} if (!miembro){
  //  console.log("Cliente obtiene 25% de descuento, en total paga " + compra * 0.75)
//}
