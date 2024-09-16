// Ejercicio x: Clasificar tipo de pad y membresía del gimnasio
var ejercicioJs = 

function() {
  // Datos de entrada
  let edad = 18; // Edad del usuario
  let membresia = "VIP"; // Tipo de membresía elegida (opciones: "Básico", "Estándar", "VIP")

  if (edad < 18) {
    console.log("No puedes inscribirte solo, necesitas la autorización de un adulto.");
  } else if (edad >= 18 && edad <=60) {
    console.log("Puedes inscribirte sin problemas en el gimnasio.");
  } else {
    console.log("Eres mayor de 60 años, tienes descuentos en las membresías.");
  }

// Uso de switch para determinar beneficios según la membresía seleccionada

switch (membresia) {
case "Básico":
console.log("Membresía Básica: Acceso a todas las áreas del gimnasio entre semana excepto piscina.");
break;
case "Estándar":
console.log("Membresía Estándar: Acceso completo al gimnasio y actividades grupales incluyendo piscina.");
break;
case "VIP":
console.log("Membresía VIP: Acceso completo con beneficios adicionales como entrenador personal y nutricionista.");
break;
default:
console.log("Tipo de Membresía no reconocido");
}
}
