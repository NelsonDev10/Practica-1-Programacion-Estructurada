let plan = "premium"; // Cambia el valor de 'plan' para probar otros casos

// Selección de permisos en función del plan seleccionado
switch(plan) {
    case "basic":
        console.log("Plan Básico: Acceso limitado al contenido.");
        break;
    case "premium":
        console.log("Plan Premium: Acceso ilimitado al contenido.");
        break;
    default:
        console.log("Sin Plan: No válido.");
        break;
}
