console.group('Circulo')

const radioCirculo = 3
const diametro = radioCirculo * 2
const PI = Math.PI

const circunferencia = diametro * PI
const areaCirculo = (radioCirculo ** 2) * PI
console.log({
    radioCirculo,
    circunferencia,
    areaCirculo
});

function calcularCirculo(radio){
    const diametro = radio * 2
    const radioAlCuadrado = Math.pow(radio,2)
    return{
        circunferencia: diametro * Math.PI.toFixed(3),
        area: radioAlCuadrado * Math.PI.toFixed(3)
    }
}

console.groupEnd('Circulo');