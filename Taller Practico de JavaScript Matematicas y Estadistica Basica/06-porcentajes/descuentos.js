const inputPrice = document.getElementById('price')
const inputDiscount = document.getElementById('discount')
const btn = document.getElementById('calcular')
const pResult = document.getElementById('result')

btn.addEventListener('click',calcularPrecioConDescuento)



function calcularPrecioConDescuento(){
    
    const price = Number(inputPrice.value)
    const discount = Number(inputDiscount.value)

    if(!price || !discount){
        pResult.innerText = "POR FAVOR LLENA EL FORMULARIO"
        return
    }
    else if(discount > 100){
        pResult.innerText = "ESTE DESCUENTO NO ES VALIDO"
    }else{
        const newPrice = (price * (100 - discount)/100)
        pResult.innerText = `El nuevo precio con descuento es $${newPrice}`   
    }
}




