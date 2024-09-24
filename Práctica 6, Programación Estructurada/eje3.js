const readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese su edad: ', (edad)=>{
    let edadInt = parseInt(edad);
    
    if (edadInt < 0) {
        console.log('La edad no puede ser negativa.');
    } else if (edadInt <= 12) {
        console.log('Usted es un niño.');
    } else if (edadInt <= 17) {
        console.log('Usted es un adolescente.');
    } else if (edadInt <= 35) {
        console.log('Usted es un adulto joven.');
    } else if (edadInt <= 59) {
        console.log('Usted es un adulto.');
    } else {
        console.log('Usted es un adulto mayor.');
    }
    rl.close();
});