let fechaActual =  new Date();
let horas =  fechaActual.getHours();
let minutos =  fechaActual.getMinutes();
let segundos =   fechaActual.getSeconds();
let milisegundos =  fechaActual.getMilliseconds();

console.log(`Hora actual:${horas}:${minutos}:${segundos}:${milisegundos}`);


//Tarea: Obtener la fecha actual utilizando el getDate dia, mes y año
var diaActual = fechaActual.getDate();
console.log(diaActual);

