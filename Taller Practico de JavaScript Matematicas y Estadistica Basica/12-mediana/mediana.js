function mediana(array){
    let mediana;
    let indiceMediana;

    if(esImpar(array)){
        indiceMediana = ((array.length+1)/2)-1
        mediana = array[indiceMediana]
        return mediana
    }else if(esPar(array)){
        let indiceMediana1 = (array.length/2)-1
        let indiceMediana2 = indiceMediana1 + 1
        mediana = prom([array[indiceMediana1],array[indiceMediana2]])
    }
    return mediana
}