// Se crea una promesa que resuelve después de un tiempo determinado (3 segundos)
const esperarTresSegundos = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Tiempo completado después de 3 segundos");
    }, 300);
});

// Consumo de la promesa
esperarTresSegundos
    .then((mensaje) => {
        console.log(mensaje); // Mostrará el mensaje después de 3 segundos
    })
    .catch((error) => {
        console.error(error); // Captura de errores en caso de fallo
    });
