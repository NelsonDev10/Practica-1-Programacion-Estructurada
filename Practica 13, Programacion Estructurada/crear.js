const fs = require('fs');

const fileName = 'archivo.json';
const content = {
  nombre: "Marta Guzmán",
  edad: 22,
  materias: ["Lógica de Programación", "Realidad Nacional", "Expresión Oral y Escrita"],
  activo: true
};

fs.writeFile(fileName, JSON.stringify(content, null, 2), (err) => {
  if (err) {
    console.log("Error al crear el archivo JSON", err);
  } else {
    console.log("Archivo JSON creado exitosamente");
  }
});
