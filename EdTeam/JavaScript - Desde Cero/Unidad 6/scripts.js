let gato = {
    nombre: 'Aquiles',
    años: 3,
    color: 'Gris',
    sexo: 'Macho',
    correr (){
        console.log(`${this.nombre} está corriendo`)
    }
}

console.log(gato.nombre)
console.log(gato.correr)
console.log(gato.correr())

let user = {
    nombre: 'Ornela'
}

console.log(user.nombre)
console.log(user['nombre'])

let a = 'Hola', b = 'mundo'

let saludo = {
    [a + b]: 'Variable holamundo'
}

console.log(saludo['holamundo'])
 