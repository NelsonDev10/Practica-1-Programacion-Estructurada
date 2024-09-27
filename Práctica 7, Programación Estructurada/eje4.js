const nombres = ["Ana","Luis","Maria","Juan","Carlos","Elena","Sofia","Pedro"]

console.log("Lista de Nombres:");
for (let i=0; i < nombres.length; i++){
    console.log(nombres[i]);
}

let cantidadNombres = nombres.length;
console.log("\n Cantidad total de nombres " + cantidadNombres);

let nombreBuscado = "Maria";
let encontrado = false;
for (let i=0; i < nombres.length; i++){
    if (nombres[i] == nombreBuscado){
        encontrado = true;
        console.log("\n Nombre'"+nombreBuscado+"'No fue encontrado en el array");
        break;
        }
        }
if (!encontrado) {
    console.log("\n Nombre'"+nombreBuscado+"'No fue encontrado en el array");
}

let nombreMasLargo = nombres[0];
for (let i=0; i < nombres.length; i++){
    if (nombres[i].length > nombreMasLargo.length){
        nombreMasLargo = nombres[i];
    }
    }
    console.log("\n El nombre mas largo es: "+nombreMasLargo);


//convertir todos los numeros a mayusculas y mostrarlos
console.log("\n Nombres en Mayusculas: ")
for (let i=0; i < nombres.length; i++){
    console.log(nombres[i].toUpperCase());
}

//agregar un nuevo nombre al array y mostrar la lista actualizada
let nuevoNombre= 'Gabriela'
nombres.push(nuevoNombre);
console.log("\n Nombres actualizados: ")
for (let i=0; i < nombres.length; i++){
    console.log(nombres[i]);
}

// Eliminatr el ultimo nombre del array y mostrar la lista actualizada
nombres.pop();
console.log("\n Nombres actualizados: ")
for (let i=0; i < nombres.length; i++){
    console.log(nombres[i]);
}

// invertir el orden de los nombres y mostrarlos
console.log("\n Nombres invertidos: ")
// for
for (let i=nombres.length-1; i >= 0; i--){
    console.log(nombres[i]);
}

