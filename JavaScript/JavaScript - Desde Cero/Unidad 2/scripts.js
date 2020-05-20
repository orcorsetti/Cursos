/* Type Coertion*/

console.log('Numero' + 10)
console.log(`Numero` * 10)
console.log(`2` * 10)
console.log(true + `Hello`)
console.log(true + 1)
console.log(false + 1)
console.log(false == '')

/* Datos por valor o por referencia*/
let number = 50
let number1 = number
console.log('Number = ' + number)
console.log('Number1 = ' + number)

let numbers1 = [1, 2, 3, 4]
let numbers2 = numbers1
numbers2.push(5)
console.log('Numbers1 = ' + numbers1)
console.log('Numbers2 = ' + numbers2)

/* Operadores */
let nombre = 'Ornela'
let edad = 22
edad += 1
console.log(edad)
edad -= 1
console.log(edad)
edad *= 2
console.log(edad)
edad /= 2
console.log(edad)

console.log(5 == '5')
/*Usar triple*/
console.log(5 === '5')
console.log(5 != '5')
console.log(5 !== '5')

/*Controla por orden alfabetico*/
console.log('b' > 'a')

/*Operadores Unarios y Binarios*/

console.log( 5 + 5 )
console.log(!0)
console.log(typeof true)
number = 5
/*Post-Decremento*/
console.log(number --)
console.log(number)
/*Pre-Decremento*/
console.log(--number)

/*Operador Ternario*/
let age = prompt('Dime tu edad.')

let isAdult = age >= 18 
                ? 'Eres mayor de edad'
                : 'No eres mayor de edad'

alert(isAdult)

/*Operador de Corto Circuito*/

let a 
/*Si el primer valor es falso usa el segundo, si el primer valor es verdadero agarra el primero */
let b = a || 'Juan'
console.log(b)
let c = null || 25
console.log(c)
a = b || c
console.log(a)

/*Si el primer valor es falso se queda con el primero, si el primer valor es verdadero agarra el segundo*/
let d = null && a
console.log(d)

/*Numeros*/
number.toFixed(2)
let numfixed = 9.123956789
console.log(numfixed.toFixed(3))

console.log(age)
console.log(parseInt(age, 10))
console.log(parseFloat(age))

console.log(Math.floor(20.7))
console.log(Math.ceil(20.1))
console.log(Math.round(20.5))
console.log(Math.round(20.1))
console.log(Math.random())

/*Strings*/

console.log('Ornela'.length)
name = `Ornela Corsetti`
console.log(name.length)

console.log('      jaja   ')
console.log('      jaja   '.trim())

console.log('JAJAJA'.toLowerCase())
console.log('jajaja'.toUpperCase())

console.log(name.indexOf('r'))
console.log(name.indexOf('r',2))

console.log(name.includes('Cors'))

console.log(name.startsWith('Orne'))
console.log(name.endsWith('tti'))