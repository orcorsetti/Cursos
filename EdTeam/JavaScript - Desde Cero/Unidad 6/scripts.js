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
 
console.log(gato)
delete gato.años
console.log(gato)

gato.edad = 3
console.log(gato)

let string = 'jajaja'
console.log(Object.getPrototypeOf(string))

let stringObject = new String('String Object')
console.log(stringObject)

console.log(String.prototype)

console.log('nombre' in gato)
console.log('patas' in gato)

Object.prototype.patas = 4
for(let propiedad in gato) {
    console.log(propiedad)
}
console.log('')
console.log('HasOwnProperty:')
for(let propiedad in gato) {
    if (gato.hasOwnProperty(propiedad)) console.log(propiedad)
}

/*Datos primitivos se asignan por valor y objetos por referencia*/

let gato2 = Object.assign({},gato)
console.log('')
console.log('Gato Original:')
console.log(gato)
console.log('')
console.log('Gato Copiado:')
console.log(gato2)

gato2.orejas = 'grises'

console.log('')
console.log('Gato Original (Sin Modificar):')
console.log(gato)
console.log('')
console.log('Gato Copiado (Modificado):')
console.log(gato2)

/*Object.entry devuelve un objeto array like de arrays con las entradas de un objeto*/
console.log(Object.entries(gato))
 /*Object.keys devuelve un objeto array like con los nombres de las propiedades del objeto*/
console.log(Object.keys(gato))
/*Object.values devuelve un objeto array like con los valores de las propiedades del objeto*/
console.log(Object.values(gato))