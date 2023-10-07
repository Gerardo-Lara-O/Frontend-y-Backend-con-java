function calcularPromedio(lista){
    const sumaLista = lista.reduce((valorAcumulado,nuevoValor) => valorAcumulado + nuevoValor)

    const promedio = sumaLista / lista.length
    console.log(promedio);
    return promedio
}