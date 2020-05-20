const os = require('os')
const fs = require('fs')

// console.log(os.platform())
// console.log(os.release())
// console.log(os.freemem())

fs.writeFile('./texto.txt', 'Linea uno.', function (err) {
    err ? console.log(err) : console.log('Archivo creado.')
})
console.log('Ultima linea de codigo')