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
//? Clase de Cursos
class Course {
    constructor({
        name,
        classes = []
    }) {
        this.name = name
        this.classes = classes
    }
}

//? constructor de clases (videos)
class Clases {
    constructor({
        name,
        video = undefined,
        comentarios = "",
        aportes = [],
        preguntas = []
    }) {
        this.name = name;
        this.video = video;
        this.comentarios = comentarios;
        this.Aportes = aportes;
        this.Pregunta = preguntas;
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
//! Clases (videos)
const claseIntroProg = new Clases({
    name: "01 - Curso de Introduccion a la Programacion"
})

//! Cursos
const cursoProgBasica = new Course({
    name: "Curso Gratis de Programacion Basica",
    classes: [
        claseIntroProg,
        "02 - Pensando analiticamente",
        "03 - Curso de Programacion Orientada a Objetos"
    ]

})
const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
    classes: [
        claseIntroProg,
        
    ]

})
const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
    classes: [
        claseIntroProg,
        
    ]

})
const cursoResponsiveDesign = new Course({
    name: "Curso de Responsive Design",
    classes: [
        claseIntroProg,
        
    ]

})

//! Rutas de Aprendizaje
const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
        cursoResponsiveDesign
    ]
})

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso DataBusiness",
        "Curso Dataviz",
    ]
})

const escuelaVideojuegos = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgBasica,
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
        escuelaData,
    ]
})