const math = {}

function add(a, b) {
    return a+b
}

function substract(a, b) {
    return a-b
}

function multiply(a, b) {
    return a*b
}

function divide(a, b) {
    if (b===0) {
        console.log("No se puede dividir por 0")
    } else {
        return a/b
    }
}

// exports.add = add
// exports.substract = substract
// exports.multiply = multiply
// exports.divide = divide

math.add = add
math.divide = divide
math.substract = substract
math.multiply = multiply

module.exports = math
