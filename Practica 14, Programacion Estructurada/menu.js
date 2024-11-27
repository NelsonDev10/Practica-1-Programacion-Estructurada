const readline = require('readline');

// Llamamos las funciones
const create = require('./create');
const read = require('./read');
const addVehicle = require('./add');
const modify = require('./modify');
const deleteVehicle = require('./delete');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log(`\n—— Menú ——`);
    console.log('1. Crear archivo JSON');
    console.log('2. Leer archivo JSON');
    console.log('3. Agregar vehículo');
    console.log('4. Modificar vehículo');
    console.log('5. Eliminar vehículo');
    console.log('6. Salir');
}

function handleMenuOption(option) {
    switch (option) {
        case '1':
            create(); // Llamada a la función crear
            break;
        case '2':
            read(); // Llamada a la función leer
            break;
        case '3':
            addVehicle(); // Llamada a la función agregar
            break;
        case '4':
            modify(); // Llamada a la función modificar
            break;
        case '5':
            deleteVehicle(); // Llamada a la función eliminar
            break;
        case '6':
            console.log('Saliendo del programa.');
            rl.close(); // Cierra la interfaz de lectura
            return;
        default:
            console.log('Opción no válida. Intente de nuevo.');
            break;
    }

    // Después de ejecutar una opción, mostrar el menú nuevamente
    setTimeout(promptMenu, 1000); // Usar setTimeout para dar tiempo a que la acción se ejecute
}

function promptMenu() {
    showMenu();
    rl.question('Seleccione una opción: ', handleMenuOption);
}

// Inicia el proceso mostrando el menú
promptMenu();