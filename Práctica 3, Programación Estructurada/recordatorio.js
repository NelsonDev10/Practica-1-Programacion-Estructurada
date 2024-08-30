function establecerRecordatorio(fechaHoraRecordatorio, mensaje) {
    // Obtener la fecha y hora actuales
    const ahora = new Date();

    // Convertir el texto de fecha y hora al recordatorio en un objeto Date
    const horaRecordatorio = new Date(fechaHoraRecordatorio);

    // Calcular la diferencia en milisegundos entre la hora actual y la hora del recordatorio
    const diferenciaTiempo = horaRecordatorio.getTime() - ahora.getTime();

    // Si la diferencia es positiva, significa que el recordatorio es para el futuro
    if (diferenciaTiempo > 0) {
        // Configurar un temporizador para mostrar el mensaje después del tiempo calculado
        setTimeout(() => {
            // Obtener y mostrar la fecha y hora del recordatorio
            const año = horaRecordatorio.getFullYear();
            const mes = horaRecordatorio.getMonth() + 1; // Los meses son 0-indexados
            const dia = horaRecordatorio.getDate();
            const horas = horaRecordatorio.getHours();
            const minutos = horaRecordatorio.getMinutes();
            const segundos = horaRecordatorio.getSeconds();

            console.log(`Recordatorio para ${dia}/${mes}/${año} ${horas}:${minutos}:${segundos}: ${mensaje}`);
        }, diferenciaTiempo);
    } else { // Si la hora ya ha pasado, mostrar un mensaje informativo
        console.log("La fecha y hora ya han pasado.");
    }
}

// Recordatorio para la práctica
establecerRecordatorio("2024-08-29T18:30:50", "¡Es hora de la práctica!");
