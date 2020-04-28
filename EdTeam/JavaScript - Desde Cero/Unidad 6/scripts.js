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
