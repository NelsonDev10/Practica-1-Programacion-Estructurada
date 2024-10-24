class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    hacerSonido() {
      console.log(`${this.nombre} hace un sonido.`);
    }
  }
  
  class Perro extends Animal {
    hacerSonido() {
      console.log(`${this.nombre} ladra.`);
    }
  }
  
  // Creación de un objeto
  const perro1 = new Perro('Rex');
  perro1.hacerSonido(); // Imprime: Rex ladra.