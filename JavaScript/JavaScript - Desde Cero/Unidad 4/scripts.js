/* Funciones */

//Sintaxis
function ejemplo (name, genero) {
    genero = genero.toUpperCase()
    saludo = genero === 'M'
            ? `Bienvenido `
            : `Bienvenida `
    return saludo+name
    
}

// console.log(ejemplo('Ornela', 'f'))
// console.log(ejemplo('Mariano', 'm'))

/* Funciones Flecha */
const ejemplo_flecha = (name, genero) => {
    genero = genero.toUpperCase()
    saludo = genero === 'M'
    ? `Bienvenido (flecha) `
    : `Bienvenida (flecha) `
    return saludo+name
    
}

// console.log(ejemplo_flecha('Mariano', 'm'))
// console.log(ejemplo_flecha('Ornela', 'f'))

const sumar = (a,b) => a + b

// console.log('Funcion Sumar: ' + sumar(1, 2))

/*Pasar una cantidad indefinida de argumentos*/
const sumarTodos = (...numeros) => {
    let res = 0
    for(let i = 0; i < numeros.length; i++) {
        res+=numeros[i]
    }
    return res
}
// console.log(sumarTodos(1,2,3,4,5,6,7))

/*Ciudadano de primera clase*/
const c = console.log
const multiplicar = (a,b) => a * b

// c(multiplicar(3,4))

let edad1 = multiplicar(multiplicar(2,2),4)
// c(edad1)

const sumar1 = x => y => x + y 
// c(sumar1(15)(20))
 
const a = sumar1(2)(3) //5
const b = sumar1(5)    //y => 5 + y
// c(sumar1(a)(b(3)))     //13

/*Funcion Anónima*/
// setTimeout(()=> {alert('Holis')}, 5000)

/*Scope*/
{
    let nombre = 'Ornela Corsetti'
    {
        c(nombre)
    }
}
// c(nombre) //Da error

/*Closures*/
function aumentar() {
    let numero = 0
    return function() {
        numero++
        c(numero)
    }
}

const incrementar = aumentar()

incrementar()
incrementar()
incrementar()
incrementar()

let edad = 15

let user = {
    nombre: 'Ornela',
    edad: 22,
    getEdad() {
        c('Sin this: ' + edad)
        c('Con this: ' + this.edad)
    }
}

user.getEdad()