const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const numeroSecreto = generarNumeroAleatorio(1, 100);
let intentos = 0;

function adivinar() {
    rl.question('Adivina el número (entre 1 y 100): ', (respuesta) => {
        intentos++;
        const numeroUsuario = parseInt(respuesta, 10);

        if (numeroUsuario === numeroSecreto) {
            console.log(`¡Correcto! Adivinaste el número en ${intentos} intento(s).`);
            rl.close();
        } else if (numeroUsuario < numeroSecreto) {
            console.log('El número es mayor.');
            adivinar(); 
        } else {
            console.log('El número es menor.');
            adivinar();
        }
    });
}
adivinar();
