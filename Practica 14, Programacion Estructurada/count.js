const fs = require('fs')
const fileName = 'vehiculos.json'

fs.readFile(fileName, 'utf-8', (err, content) => {
    if (err) {
        console.log('Error al leer el archivo JSON', err);
        return;
    }

    const vehiculos = JSON.parse(content);
    console.log(`La flota de vehículos es de: ${vehiculos.length}`);
})