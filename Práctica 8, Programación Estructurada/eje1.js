// Importamos el módulo readline para manejar la entrada y salida en la consola
const readline = require('readline');

// Creamos una interfaz de línea de comandos
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que muestra el menú
function mostrarMenu() {
  rl.question('1. Escribir - 2. Leer - 3. Salir - Escoge una opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        console.log('Opción 1: Eliges Escribir');
        // Aquí podrías implementar la funcionalidad de escribir
        mostrarMenu();
        break;
      case '2':
        console.log('Opción 2: Eliges Leer');
        // Aquí podrías implementar la funcionalidad de leer
        mostrarMenu();
        break;
      case '3':
        console.log('Fin del programa');
        rl.close(); // Cerramos la interfaz para terminar el programa
        break;
      default:
        console.log('Opción no válida');
        mostrarMenu();
    }
  });
}

// Llamamos a la función para mostrar el menú inicial
mostrarMenu();
