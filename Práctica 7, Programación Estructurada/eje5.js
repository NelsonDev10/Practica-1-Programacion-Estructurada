const persona ={
    nombre: "Isabel",
    edad: 24,
    ciudad: "Guatajiagua"
}

for (let propiedad in persona){
    console.log(propiedad + ": " + persona[propiedad]);
}