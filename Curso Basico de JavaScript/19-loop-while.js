var estudiantes = ["Maria","Sergio","Rosa","Daniel"]

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){

    let estudiante = estudiantes.shift()
    saludarEstudiantes(estudiante)
}