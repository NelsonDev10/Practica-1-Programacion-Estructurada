const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function preguntarLetra() {
  rl.question('¿Qué letra desea (A-Z)? ', (letra) => {
    letra = letra.toUpperCase();
    if (/[A-Z]/.test(letra)) {
      preguntarVeces(letra);
    } else {
      console.log('Debes elegir una letra entre la A y la Z.');
      preguntarLetra();
    }
  });
}

function preguntarVeces(letra) {
  rl.question('¿Cuántas repeticiones (1-15)? ', (veces) => {
    veces = parseInt(veces);
    if (veces >= 1 && veces <= 15) {
      generarCadena(letra, veces);
    } else {
      console.log('El número de repeticiones debe estar entre 1 y 15.');
      preguntarVeces(letra);
    }
  });
}

function generarCadena(){
    while (veces>0){
        cadena += letra;
        veces--
    }
    console.log("Resultado: ", cadena);
    rl.close
}

preguntarLetra()