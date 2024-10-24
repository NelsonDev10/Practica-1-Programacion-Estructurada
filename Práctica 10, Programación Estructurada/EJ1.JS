// Definición de la clase
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    // Método para imprimir información en consola
    imprimirInfo() {
      console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
  }
  
  // Creación de un objeto
  const persona1 = new Persona('Isabel', 24);
  persona1.imprimirInfo(); // Imprime: Nombre: Isabel, Edad: 24