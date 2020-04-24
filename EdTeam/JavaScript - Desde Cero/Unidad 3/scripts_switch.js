let answer = prompt('Elige un numero del 1 al 3')

switch (answer) {
    case '1':
        alert('Opción 1.')
        break;
    case '2':
        alert('Opcion 2.')
        break;
    case '3':
        alert('Opcion 3')
        break;
    default:
        alert('Ingrese un numero correcto (del 1 al 3)')
        break;
}