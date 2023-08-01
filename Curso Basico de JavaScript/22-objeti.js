let miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    anyo: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.anyo}`);
    }
}

miAuto.detalleDelAuto()