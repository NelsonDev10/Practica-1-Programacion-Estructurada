// Función que retorna una promesa que recibe un número de iteraciones 
    const doTask = (iteraciones) => { 

        return new Promise((resolve, reject) => { 
            // Arreglo que almacenará los números aleatorios 
            const numbers = []; 

            // Bucle para 'n' iteraciones 
            for (let i = 0; i < iteraciones; i++) { 
                // Generar un número aleatorio entre 0 y 5 
                const number=1 + Math.floor(Math.random() * 6); 

                // Agrega el número generado al arreglo 'numbers' 
                numbers.push(number); 

                // Si el número es 5, rechaza la promesa con un error y detiene el bucle 
                if (number === 6) { 
                    reject({ 
                        error: true, // Indicador de error 
                        message: "¡Se ha sacado un 6!" // Mensaje de error 
                    }); 
                    return; // Detiene la ejecución de la función 
                } 
            } 
            // Si el bucle se completa sin sacar un 5, se resuelve la promesa con el arreglo de números generados 
            resolve({ 
                error: false, // No hay error 
                value: numbers // Devuelve el arreglo de números generados 
            }); 
        }); 
    }; 

    // Ejecutando la función dtask y gestionando las promesas
    doTask(0) 
    .then(result => console.log("Tiradas correctas: ", result.value)) 
    .catch(err => console.error("Ha ocurrido algo: ", err.message));  


