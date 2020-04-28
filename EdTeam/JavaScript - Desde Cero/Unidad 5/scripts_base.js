/* Arrays */

let array = ['Hola', 'Ornela', 'Corsetti','.']

//Descomponer
let [s1, s2, s3, s4] = array
console.log(s1)
console.log(s2)
console.log(s3)
console.log(s4)

//Agregar valor
array = [1,2,3,4]
console.log(array)
array.push(5)
console.log(array)

//Sacar valor
array.pop()
console.log(array)

//Agrega valor por delante
array.unshift('Nuevo')
console.log(array)

//Elimina primer valor
array.shift()
console.log(array)

//Agragar/Eliminar elemento posicion determinada, si elimino retorna un array con los que elimine
array = ['Esto', 'es', 'otro', 'array']
console.log(array)
array.splice(2,0,'agrego','en posicion dos')
console.log(array)

resto = array.splice(4,2,'Reemplaza', 'Ultimos dos')
console.log(array)
console.log(resto)
array.splice(4,2)
console.log(array)
array.splice(4,0,resto[0],resto[1])
console.log(array)

console.log()

//Extrae elementos de una array en uno nuevo sin modificar el original
nuevo = array.slice(2,4)
console.log(nuevo)



