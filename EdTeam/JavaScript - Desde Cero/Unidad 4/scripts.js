/* Funciones */

//Sintaxis
function ejemplo (name, genero) {
    genero = genero.toUpperCase()
    saludo = genero === 'M'
            ? `Bienvenido `
            : `Bienvenida `
    return saludo+name
    
}

console.log(ejemplo('Ornela', 'f'))
console.log(ejemplo('Mariano', 'm'))

