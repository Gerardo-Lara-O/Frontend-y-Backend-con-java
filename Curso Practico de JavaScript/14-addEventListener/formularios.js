const h1 = document.getElementById('titulo')
const input1 = document.getElementById('calculo1')
const input2 = document.getElementById('calculo2')
const btn = document.getElementById('btnCalcular')
const pResult = document.getElementById('result')
const form = document.getElementById('form')

form.addEventListener('submit',sumarInputValues)

function sumarInputValues(event){
    console.log({event});
    event.preventDefault()
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "El Resultado es: " + sumaInputs
}
