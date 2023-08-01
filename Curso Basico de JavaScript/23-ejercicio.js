let autos = new Array()
let cantidadRegistrados = 0
let cantidadAutos = 0

function auto(marca, modelo, annio){
    this.marca = marca
    this.modelo = modelo
    this.annio = annio
    }

cantidadAutos = prompt("Ingrese cuantos autos desea registrar")



while(cantidadRegistrados < cantidadAutos){
    let marca = prompt("Selecciona una Marca: ")
    let modelo = prompt("Selecciona un Modelo:")
    let annio = prompt("Selecciona un Annio: ")    

    let autoNuevo = new auto(marca,modelo,annio)
    autos.unshift(autoNuevo)

    cantidadRegistrados ++
}

console.log(autos);