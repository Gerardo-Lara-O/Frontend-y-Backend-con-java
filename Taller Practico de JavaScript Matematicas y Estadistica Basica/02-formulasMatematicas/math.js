//* funciones
// cuadrado
console.group('Cuadrado')
function calcularCuadrado(lado){
    return{
        perimetro: lado * 4,
        area: lado * lado
    }
}
// triangulo
function calcularTriangulo(lado1,lado2, base, altura){
    return{
        perimetro:lado1 + lado2 + base,
        area: (base * altura) / 2
    }
}
//* Operaciones
// cuadrado
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4
// area
const areaCuadrado = ladoCuadrado * ladoCuadrado

console.log({
    perimetroCuadrado,
    areaCuadrado
});

console.groupEnd('Cuadrado');


console.group('Triangulo')
// triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;
// perimetro
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase
// area
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2
console.log({
    perimetroTriangulo,
    areaTriangulo
});
console.groupEnd('Triangulo')

