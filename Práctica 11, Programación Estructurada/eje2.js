class Persona {
    constructor(nombre, apellido) {
      this._nombre = nombre;
      this._apellido = apellido;
    }
  
    get nombreCompleto() {
      return `${this._nombre} ${this._apellido}`;
    }
  
    set nombreCompleto(nombreCompleto) {
      const partes = nombreCompleto.split(' ');
      this._nombre = partes[0];
      this._apellido = partes[1];
    }
  }
  
  // Ejemplo de uso
  const persona2 = new Persona("Yancy", "Alfaro");
  persona2.nombreCompleto = "Margarita Hernandez";
  console.log(persona2.nombreCompleto);  // Output: "Margarita Hernandez"
  