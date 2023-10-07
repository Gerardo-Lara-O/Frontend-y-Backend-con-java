class Banda {
    constructor({
        nombre,
        generos = [],
    }) {
        this.nombre = nombre;
        this.generos = generos;
        this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
        // Tu código aquí 👈
        if(
            this.integrantes.find((element) => element.instrumento === 'Bateria')
        ){
            console.log("La banda ya tiene un Baterista");
        }else{
            this.integrantes.push(integranteNuevo)
        }
    }
}

//Crear clase Integrante
class Integrante {
    // Tu código aquí 👈
    constructor({
        nombre,
        instrumento = undefined
    }) {
        this.nombre = nombre;
        this.instrumento = instrumento
    }

}


