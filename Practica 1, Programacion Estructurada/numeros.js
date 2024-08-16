function esPar(numero) {
    return numero % 2 === 0;
}

function esImpar(numero) {
    return numero % 2 !== 0;
}


console.log("El numero 6 es un numero par entonces es:",esPar(6));    
console.log("El numero 5 es un numero impar entonces es:",esImpar(5));  

console.log("El numero 9 es un numero impar entonces es:",esPar(9));    
console.log("El numero 6 es un numero par entonces es:",esImpar(3)); 
