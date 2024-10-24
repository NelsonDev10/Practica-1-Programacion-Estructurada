class Coche {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    arrancar() {
      console.log(`${this.marca} ${this.modelo} está arrancando.`);
    }
  
    detener() {
      console.log(`${this.marca} ${this.modelo} se ha detenido.`);
    }
  }
  
  // Creación de un objeto
  const coche1 = new Coche('Toyota', 'Corolla');
  coche1.arrancar(); // Imprime: Toyota Corolla está arrancando.
  coche1.detener(); // Imprime: Toyota Corolla se ha detenido.