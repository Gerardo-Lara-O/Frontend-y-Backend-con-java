// objeto literal
// const juan1 = {
//     name: "JuanDC",
//     username: "Juanddc",
//     points:100,
//     socialMedia: {
//         twitter: "juantw",
//         instagram: "juaninsta"
//     },
//     approvedCourses:[
//         "Curso definitivo de HTML",
//         "Curso practico de CSS"
//     ],
//     learningPaths: [
//         {
//             name: "Escuela de Desarrollo Web",
//             courses:[
//                 "Curso definitivo de HTML",
//                 "Curso practico de CSS",
//                 "Curso de Responsive Design"
//             ],
//         },
//         {
//             name: "Escuela de Videojuegos",
//             courses:[
//                 "Curso de introduccion",
//                 "Curso de Unreal",
//                 "Curso de Unity"
//             ]
//         }
//     ],
// }

// Programacion Orientada a objetos
//! clase constructora
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
        this.name = name;
        this.courses = courses;
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

//   const escuelaData = new LearningPath({
//     name: "Escuela de Data Science",
//     courses: [
//       "Curso DataBusiness",
//       "Curso Dataviz",
      
//   });

//   const escuelabgs = new LearningPath({
//     name: "Escuela de Videojuegos",
//     courses: [
//       "Curso Unity",
//       "Curso Unreal",
      
//   });



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

