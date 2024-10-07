const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Preguntar al usuario por una cadena de texto
rl.question('Introduce una cadena de texto: ', (cadena) => {
  // Preguntar al usuario por la letra a buscar
  rl.question('Introduce la letra a contar: ', (letraBuscar) => {
    // Inicializamos el contador de letras
    let contadorLetras = 0;

    // Bucle while para recorrer toda la cadena
    let posicion = 0;
    while (posicion < cadena.length) {
      // Si encontramos la letra (ignorando mayúsculas y minúsculas), incrementamos el contador
      if (cadena[posicion].toLowerCase() === letraBuscar.toLowerCase()) {
        contadorLetras++;
      }
      // Pasamos a la siguiente posición
      posicion++;
    }

    // Mostramos el resultado
    console.log(`La letra '${letraBuscar}' aparece ${contadorLetras} veces en la cadena.`);

    // Cerramos la interfaz readline
    rl.close();
  });
});