// Declarativa
function suma(a,b){
return a + b
}
var suma1 = suma(5,5)
console.log(suma1);

// Expresiva
var resta = function(a,b){
    return a-b
    }
console.log(resta(10,5));
console.log(typeof(resta()));


function solution(valor) {
    // Escribe tu código aquí 👈
    return typeof valor
  }
  
  solution(1)
  solution("Dieguillo")
  solution(true)