/* Sintaxis Condicionales*/

let numero = 5

if(5 > numero)
{
    console.log('Entra primer if')
} else if (9 < numero) {
    console.log('Entra segundo if')
} else {
    console.log('Entra en el else')
}

if (numero > 5 && numero < 9 ) {
    console.log('Entra en la condición multiple (&&)')
} else {
    console.log('No entra en al condición multiple (&&)')
}

if (numero === 5 || numero === 9) {
    console.log('Entra en la condición multiple (||)')
} else {
    console.log('No entra en la condición multiple (||)')
}

/*
Falsy:
-0
-''
-Nan
-undefined
-null

Truthy:
-string no vacío
-Numero distinto de 0
-arrays
-objetos
*/

