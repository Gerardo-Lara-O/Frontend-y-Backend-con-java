const h1 = document.getElementById('titulo')
const input1 = document.getElementById('calculo1')
const input2 = document.getElementById('calculo2')
const btn = document.getElementById('btnCalcular')
const pResult = document.getElementById('result')

btn.addEventListener('click',btnOnClick)

function btnOnClick(){
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "El Resultado es: " + sumaInputs
}


console.log({
    h1,input1,input2,btnCalcular
});