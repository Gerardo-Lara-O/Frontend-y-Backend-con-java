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
// clase constructora
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

// constructor
class LearningPath{
    constructor({
        name,
        courses = []
    }){
        this.name = name;
        this.courses = courses;
    }
}

// instancias
const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
      "curso JS",
      "curso React",
      "curso NextJS",
    ],
  });

  const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
      "curso Python",
      "Curso Matematicas",
      "Curso Excel",
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

