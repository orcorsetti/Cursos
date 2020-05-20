/*Ciclo For:
for(inicia variable; condición final; incremento) {}*/

for (let i = 0; i < 10; i++) {
    console.log(`Iteración N.º: ${i}`)
}   
console.log('') 

for (let i = 0; i < 10; i++) {
    if(i===7){
        console.log('Salta con continue')
        continue
    }
    console.log(`Iteración N.º: ${i}`)
}

console.log('') 

for (let i = 0; i < 10; i++) {
    if(i===7){
        console.log('Salgo con un break')
        break
    }
    console.log(`Iteración N.º: ${i}`)
}


