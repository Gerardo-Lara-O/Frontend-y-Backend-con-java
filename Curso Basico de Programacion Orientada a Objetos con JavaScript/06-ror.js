// Prototipos con la sintaxis de Clases
class Student2 {
    constructor({
        name,
        age,
        email,
        cursosAprobados = []
    }) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito)
    }
}

const miguelito = new Student2({
    name: "Miguel",
    age: 28,
    email: "miguelito@platzi.com",
    cursosAprobados: [
        "Curso de Analisis de Negocios para Ciencias de Datos",
        "Curso de Analisis de Datos para Analisis de Negocios para Ciencia de Datos",
    ]
}
)