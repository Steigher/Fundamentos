/* Iterar un JSON y Mostrar Clave- Valor

Crea una funciòn mostrarPropiedades(obj) que itere las
propiedades de un objeto y muestre en consola: "[clave]: [valor]"
para cada una

const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
};

mostrarPropiedades(auto);
output: 
"marca: Toyota"
"modelo: Corolla"
"año: 2022"
*/

const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2022,
};

for (let iterar in auto) { //Iterar sobre las propiedades del objeto
    console.log(iterar, ":", auto[iterar]);
}
