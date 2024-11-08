// Definición de la clase Ciclista
class Ciclista {
    // Constructor para inicializar la distancia recorrida
    constructor(distanciaRecorrida) {
      this._distanciaRecorrida = distanciaRecorrida; // Atributo privado para almacenar la distancia recorrida
    }
    // Getter para obtener la distancia recorrida y verificar el estado del ciclista
    get distanciaRecorrida() {
      if (this._distanciaRecorrida > 0) {
        console.log("El ciclista está en movimiento."); // Mensaje si el ciclista se está moviendo
      } else if (this._distanciaRecorrida === 0) {
        console.log("El ciclista está actualmente parado."); // Mensaje si el ciclista está parado
      }
    }
    // Setter para establecer un nuevo valor a la distancia recorrida
    set distanciaRecorrida(new_distance) {
      // Verificar que la nueva distancia sea mayor o igual a 0
      if (new_distance > -1) {
        this._distanciaRecorrida = new_distance; // Asignar el nuevo valor a la distancia recorrida
        console.log(`Nuevo valor asignado a la distancia del recorrido - ${new_distance}`); // Mensaje de confirmación
      } else {
        console.log("El valor de distancia recorrida debe ser mayor a -1."); // Mensaje de error si el valor es inválido
      }
    }
  }
  // Crear una instancia de la clase Ciclista con una distancia recorrida inicial de 1
  const Ciclistal = new Ciclista(1);
  // Cambiar la distancia recorrida a 0

  Ciclistal.distanciaRecorrida = 0;
  Ciclista.distanciaRecorrida;

  Ciclistal.distanciaRecorrida= 10;

  Ciclistal.distanciaRecorrida = -1;

  Ciclistal.distanciaRecorrida;