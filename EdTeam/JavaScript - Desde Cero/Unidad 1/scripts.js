/* Variables y Constantes*/
const num = 10

let numero = 3
console.log(numero)
console.log(numero+1)
console.log(numero*2)
console.log(numero/3)

if(5>numero) {
    console.log( `${numero} Es mayor`)
}

let number
console.log(number)

/* Sintaxis*/
let name='EDteam'
console.log(name)
const userAge = 20
console.log(userAge)
//Esto es un comentario para cometar codigo
/* Esto es una aclaracion del codigo*/

/* Tipos de Datos */

let indefinido
let anios = 5
// "" '' No me permiten poner variables
let texto = 'EDteam'
let otroTexto = "Holas"
//`` (Recomendado) Me permite poner variables, saltos de linea, marcado html 
let backticks= `${texto} tiene ${anios} años`
console.log(backticks)

backticks= `${texto} 
tiene ${anios} años`
console.log(backticks)

// let div = `<div class="container">
// ${backticks}
// </div>`
// document.body.innerHTML = div

let array = [1, 2, 5]
let object = {
    nombre: "Ornela",
    apellido: "Corsetti",
    edad: 22
}

console.log(`indefinido: ${typeof indefinido}`)
console.log(`backticks: ${typeof backticks}`)
