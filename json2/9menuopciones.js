/* generar un menu de opciones
Crear un objeto 'menu' con propiedades como opicon 1, opciòn 2, etc. donde cada valor sea un string descriptivo 
(ej "Guardar"), luego usar un bucle for in para mostrar las opciones en consola con el formato 
"[key]: [valor]". si el valor incluye la palabra "Salir" añadir una "X"

const menu = {
    opcion1: "Guardar"
    opcion2: "Cargar"
    opcion3: "Salir"
    };
    mostrarMenu(menu);

    output:
  opcion1: "Guardar"
    opcion2: "Cargar"
    opcion3: "Salir (X)"
    };*/

const menu = {
    opcion1: "Guardar",
    opcion2: "Cargar",
    opcion3: "Salir",
};

function mostrarMenu(obj) {
    for (let iterar in obj) { //Iterar sobre las propiedades del objeto
        if (obj[iterar] === "Salir"){
            console.log(iterar, ":", obj[iterar], "(X)")
        } else {
            console.log(iterar, ":", obj[iterar]);
        }
    }
}

 mostrarMenu(menu);