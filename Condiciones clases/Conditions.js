let nota = 40;
let resultado = "Aprobado";
let resultadoBoleana = false;
const nombre = "Yeison";

if (nota >= 70) {
    console.log("Aprobado");
} else if (nota >= 30) {
    console.log("No perdio, pero paso bajito");
} else {
    console.log("Reprobo");
}

if (nota == 40) {
    console.log("Saco 40");
}

//Operador del igual
let dia = "Lunes"

if (dia == "lunes") {
    console.log("Es lunes");
}

let condition1 = "leche";
let condition2 = "cereal";
let condition3 = "chocolate";

if (condition1 && condition2 && condition3) {
    console.log("Tomar leche y cereal en un plato")
} else if (condition1) {
    console.log("Tomar vaso de leche")
}

else {
    console.log("Pues no coma");
}

//Operador o ||
let condition11 = "leche";
let condition22 = "cereal";

if (condition11 == "Leche" || condition22 == "Cereal") {
    console.log("Hay alguno de los dos");
} else if (condition11 != "leche" && condition22 != "cereal") {
    console.log("No hay leche");
}

//Quiero desayunar
//1. Desayunar leche y cereal si hay
//2. Si no hay cereal comer leche con avena
//3. Si no hay cereal ni avena, tomar un vaso de leche
//4. Si no hay leche pero hay cereal comer cereal
//5. Si no hay nada ir a hacer mercado

let sileche = true;
let sicereal = true;
let siavena = true;

if (sileche && sicereal) {
    console.log("Servirme y comer");
    console.log("servirme y comer");
}
else if (sileche) {
    if (sileche)
        if (siavena)
            console.log("Comer leche y avena");
        else {
            console.log("Tomar leche");
        }
} else if (siavena) {
    console.log("comer avena")
} else if (sicereal) {
}
console.log("ir a hacer mercado");