let answer = 5
let salir = false
while(salir === false)
{
    do{
        answer = prompt(`Ingrese una opción:
        1: Opción 1.
        2: Opción 2.
        3: Opción 3.
        4: Salir.`)
        
    }while (!(answer >= 1 && answer <= 4)) 

    switch(answer) {
        case '1': 
            console.log('Opción 1.')
            break;
        case '2':
            console.log('Opción 2.')
            break;
        case '3':
            console.log('Opción 3.')
            break;
        case '4':
            salir = true;
            break;
        default:
            break;
    }
    // if (answer !== '4'){
    //     answer = prompt(`Ingrese una opción:
    //         1: Opción 1.
    //         2: Opción 2.
    //         3: Opción 3.
    //         4: Salir.`)
    // }
}
