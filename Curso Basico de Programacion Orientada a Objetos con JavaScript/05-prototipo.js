// Creando prototipos
function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // primera forma de crear metodos
    // this.aprobarCurso = function(nuevoCursito){
    //     this.cursosAprobados.push(nuevoCursito)
    // }
}
// por fuera de la funcion 
Student.prototype.aprobarCurso = function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito)
}
// instancia u Objeto
const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Introduccion a la Produccion de Videojuegos",
        "Curso de Creacion de Peersonajes"
    ]
)