class Persona {
    constructor(nombre, apellido) {
      this._nombre = nombre;
      this._apellido = apellido;
    }
  
    get nombreCompleto() {
      return `${this._nombre} ${this._apellido}`;
    }
  }
  
  // Ejemplo de uso
  const persona1 = new Persona("Yancy", "Alfaro");
  console.log(persona1.nombreCompleto);  
  