// ini
let autos = new Array()
let cantidadAutos = 0
let cantRegistrados = 0

// funcion constructora
function Auto(marca,modelo,annio){
    this.marca = marca
    this.modelo = modelo
    this.annio = annio
}

// Solicitar al usuario que agregue los carros
cantidadAutos = prompt("Cuantos autos desea registrar: ")

while(cantRegistrados < cantidadAutos){

    let marca = prompt("Marca: ")
    let modelo = prompt("Modelo: ")
    let annio = prompt("Annio: ")

    var autoNuevo = new Auto(marca,modelo,annio);

    autos.unshift(autoNuevo)


    cantRegistrados++
}

console.log(autos);