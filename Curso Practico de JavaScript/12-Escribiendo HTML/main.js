// Etiquetas - h1,p
const h1 = document.querySelector('h1');
const p = document.querySelector('p');

const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);
console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerText = "Este es el nuevo texto "
// Con este seleccionamos el atributo de esta propiedad (class)
console.log(h1.getAttribute('class'));

// Con este modificcamos el atributo
h1.classList.add('rojo')



// crear imagen
const img = document.createElement('img')
// agregar atributo y contenido 
img.setAttribute('src','https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif')
// Agregar la imagen en otro contenedor
pid.innerText = ""
pid.append(img)
