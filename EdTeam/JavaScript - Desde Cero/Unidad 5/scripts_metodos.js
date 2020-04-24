/*Ordenar arrays*/
const reverseText = s => s.split('').reverse().join('')

console.log(reverseText('Ornela Corsetti'))

let array= ['a','d','z','f','g']
console.log(array.sort())
console.log(array.sort().reverse())

let arrayNums = [100, 500, 152, 2, 40, 350]
console.log(arrayNums.sort())
console.log(arrayNums.sort((a, b) => a - b))

//Concatenar y transformar a string
console.log(arrayNums.join(' , '))

let arrayNums1 = [458, 658, 785]
console.log(arrayNums.concat(arrayNums1, 456, 854, 3))
console.log(arrayNums)

//Buscar elementos 
console.log(arrayNums.indexOf(100))
console.log(arrayNums.find(number => number > 100))
console.log(arrayNums.findIndex(number => number >200))

//Eliminar duplicados
arrayNums2 = [1,2,3,4,5,5,5,6,6,7,8,8,9]
console.log(arrayNums2)
console.log(new Set(arrayNums2))
let nuevoArray = [...new Set(arrayNums2)]
console.log(nuevoArray)

const removeDuplicates = array => [...new Set(array)]

console.log(removeDuplicates(arrayNums2))

//Sacar minimos y maximos (IMPORTANTE ...)
console.log(Math.min(...arrayNums2))
console.log(Math.max(...arrayNums2))

//Recorrer

for (let letra of array) {
    console.log(letra)
}

