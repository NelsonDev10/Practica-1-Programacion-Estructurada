const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function contarVocalesYDigitos(cadena) {
    let numVocales = 0;
    let numDigitos = 0;
    const vocales = "aeiouAEIOU";

    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];

        
        if (vocales.includes(caracter)) {
            numVocales++;
        }
        if (caracter >= '0' && caracter <= '9') {
            numDigitos++;
        }
    }

    console.log(`Número de vocales: ${numVocales}`);
    console.log(`Número de dígitos: ${numDigitos}`);
}

function solicitarCadena() {
    rl.question('Ingresa una cadena de texto (no vacía): ', (cadena) => {
        if (cadena.trim() === "") {
            console.log("La cadena no puede estar vacía.");
            solicitarCadena();  
        } else {
            contarVocalesYDigitos(cadena);  
            rl.close();  
        }
    });
}

solicitarCadena();
