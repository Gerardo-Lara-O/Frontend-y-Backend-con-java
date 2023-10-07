//? Constructor LearnigPath
class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}
//? Constructor Student
class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approved = approvedCourses;
        this.learning = learningPaths;
    }
}

//! Rutas de Aprendizaje
const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo",
    courses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
        "Curso de Responsive Design"
    ]
})

const escuelaVideojuegos = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [
        "Curso de Introduccion a la Produccion de Vgs",
        "Curso de Unreal Engine",
        "Curso de Unity 3D"
    ]
})


//! Estudiantes
const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVideojuegos
    ]
})

const miguelito2 = new Student({
    name: "Miguelito",
    username: "miguelito",
    email: "miguelito@miguelito.com",
    twitter: "miguel_feliz",
    learningPaths: [
        escuelaWeb,
        
    ]
})