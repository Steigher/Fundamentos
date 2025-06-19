// Descripción:
// Crea un programa en JavaScript que permita gestionar las notas de un grupo de estudiantes. Cada estudiante tendrá un nombre y un conjunto de notas en diferentes asignaturas. El programa debe realizar las siguientes operaciones:

// Agregar estudiantes (como objetos) a una lista.

// Agregar notas a cada estudiante (usando una matriz para almacenar las notas por asignatura).

// Calcular el promedio de notas de cada estudiante.

// Mostrar un resumen con el nombre, notas y promedio de cada estudiante.

// Lista de estudiantes (array de objetos)


const estudiantes = [];
// Función para agregar un estudiante
function agregarEstudiante(nombre) {
    const estudianteobjeto = { nombre: nombre }
    console.log(estudianteobjeto);
    estudiantes.push(estudianteobjeto)
}
// Función para agregar notas a un estudiante
function agregarNotas(nombreEstudiante, nuevasNotas) {
    const notasEstudiante = estudiantes.forEach((estudiante) => {
        if (estudiante.nombre === nombreEstudiante){
            estudiante.notas = nuevasNotas
        }
    })
}

// Función para calcular el promedio de un estudiante
function calcularPromedio(notas) {
    estudiantes.forEach((a) =>{
        a.promedio = (a.notas.reduce((acumulador, num) => acumulador + num, 0) /a.notas.length).toFixed(2)
       // console.log(a)
    })

}

// Función para mostrar el resumen de todos los estudiantes
function mostrarResumen() {

}

// --- Ejemplo de uso ---
agregarEstudiante("Ana");
//output: const estudiantes = [
// { nombre : "Ana"}
// ]; 
agregarEstudiante("Luis");
agregarEstudiante("Andres");
agregarEstudiante("Felipe");
agregarEstudiante("Miguel");
agregarEstudiante("Cristian");


agregarNotas("Ana", [85, 90, 78]);
agregarNotas("Andres", [8, 26, 9]);
agregarNotas("Luis", [92, 88, 95]);
agregarNotas("Felipe", [12, 55, 46]);
agregarNotas("Miguel", [44, 36, 80]);
agregarNotas("Cristian", [36, 54, 23]);


calcularPromedio()
console.log(estudiantes)
// mostrarResumen();