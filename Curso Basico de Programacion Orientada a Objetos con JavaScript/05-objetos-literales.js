// Objeto Literal
const natalia = {
    name: "natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS"
    ],
    // forma 1 de metodo
    // aprobarCurso: function(){

    // }
    // forma 2 
    aprobarCurso(nuevoCursito){
        // Hacer que Natalia apruebe otro curso
        this.cursosAprobados.push(nuevoCursito)
    }
}
// ejemplo
natalia.aprobarCurso("Curso de Responsive Design")
