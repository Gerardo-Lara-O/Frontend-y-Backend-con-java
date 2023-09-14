//! clase constructora Student
class Student{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }){
        this.name = name
        this.email = email
        this.username = username
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this.approvedCourses = approvedCourses
        this.learningPaths = learningPaths
    }
}

  //! Clase curso
  class Course {
    constructor({
        name,
        courses = []
    }){
        this._name = name;
        this.courses = courses;
    }

    get name(){
        return this._name;
    }

    set name(nuevoNombresito){
        if(nuevoNombresito === "Curso Malito de Programacion"){
            console.error("Web... no")
        }else{
            this._name = nuevoNombresito
        }
        
    }
}

// instancias de clases
const cursoProgBasica = new Course({
    name: "Curso Gratis de Programacion Basica",
})
const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
})
const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
})


//! Crear clase para las clases



//! constructor
class LearningPath{
    constructor({
        name,
        classes = []
    }){
        this.name = name;
        this.classes = classes;
    }
}
// instancias
const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
      cursoProgBasica,
      cursoDefinitivoHTML,
      cursoPracticoHTML
    ],
  });



// Creando instancia de la clase
const juan2 = new Student({
name: "Gerardo",
username: "nigma",
email: "nigma-nitro@outlook.com",
twitter: "nigmas",
learningPaths:[
    escuelaWeb,
    escuelaData
]
})

console.log(juan2);

