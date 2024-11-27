const fs = require('fs')
const fileName = 'vehiculos.json'

fs.readFile(fileName, 'utf-8', (err, content) => {
    if (err) {
        console.log('Error al leer el archivo JSON:', err);
        return;
    }
    try {
        const objectJSON = JSON.parse(content);
        console.log('flota de vehiculps', objectJSON);
    }catch (error) {
        console.log('erro al parsear el JSON', error)
    }
})