
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')

const formulario = document.querySelector('#formulario')

const btnCalcular = document.querySelector("#btnCalcular")

const result = document.querySelector('#result')

// escuchar eventos

formulario.addEventListener('submit', sumarInputValues)



function sumarInputValues(event){
    event.preventDefault()
    const sumaInputs = Number(input1.value) + Number(input2.value)
    result.innerText = `El resultado es: ${sumaInputs}`
}