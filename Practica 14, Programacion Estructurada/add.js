const fs = require('fs');
const fileName = 'vehiculos.json'

fs.readFile(fileName, 'utf-8', (err, content) => {
    if (err) {
        console.log('Error al leer el archivo JSON:', err);
        return;
    }
    
    const vehiculos = JSON.parse(content)
    const nuevoVehiculo = {id: 4, marca: 'ford', modelo: 'focus', año: '2024'} 
    vehiculos.push(nuevoVehiculo)

    fs.writeFile(fileName, JSON.stringify(vehiculos, null, 2), (err)=>{
        if (err) {
            console.log('erro al escribir el archivo JSON', err)
        }
        console.log('Nuevo vehiculo agregado al arcivo JSON')
    })
})