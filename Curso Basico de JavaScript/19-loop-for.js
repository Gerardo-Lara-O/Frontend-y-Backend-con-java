var estudiantes = ["Maria","Sergio","Rosa","Daniel"]

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

// for(var i = 0; i < estudiantes.length; i++){
//     saludarEstudiantes(estudiantes[i])
// }


// while(estudiantes.length > 0){

//     let estudiante = estudiantes.shift()
//     saludarEstudiantes(estudiante)
// }

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante)
}