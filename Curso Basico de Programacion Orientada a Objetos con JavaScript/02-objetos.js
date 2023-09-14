const natalia = {
name: "Natalia",
age: 20,
cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Practico de HTML y CSS"
],
aprobarCurso(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito)
}
}

// Hacer que Natalia apruebe otro curso
// natalia.cursosAprobados.push("Curso de Responsive")

natalia.aprobarCurso("Curso de CSS")


function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function(nuevoCursito){
    //     this.cursosAprobados.push(nuevoCursito);
    // }
}

Student.prototype.aprobarCurso = function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
    }

// Prototipo en JS
const juanita = new Student(
    "juanita",
    15,
    [
        "Curso de Introduccion",
        "Curso de Creacion de personajes"
    ]
)