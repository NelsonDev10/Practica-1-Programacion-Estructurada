//Creamos un objeto Date para obtener la fecha actual
let fechaActual = new Date();

//Obtener el dia de la semana (0=Domingo, hasta el 0 = Sabado)
let diaSemana = fechaActual.getDay();

//Creamos un arreglo para 
let diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]

//Obtener el nombre del dia correspondiente al numero obtenido
let nombreDia = diasSemana[diaSemana];

//Imprimir el nombre del dia en la consola
console.log(`Hoy es: ${nombreDia}`); 

