class CuentaBancaria {
    constructor(saldoInicial) {
        this._saldo = saldoInicial; // Propiedad privada para el saldo
    }

    // Método get para obtener el saldo actual
    get saldo() {
        return this._saldo;
    }

    // Método set para modificar el saldo
    set saldo(nuevoSaldo) {
        if (nuevoSaldo < 0) {
            console.log("Error: El saldo no puede ser negativo.");
        } else {
            this._saldo = nuevoSaldo;
        }
    }
}

// Ejemplo de uso:
let cuenta = new CuentaBancaria(1000);
console.log(cuenta.saldo); // Imprime: 1000

cuenta.saldo = 500; // Cambia el saldo a 500
console.log(cuenta.saldo); // Imprime: 500

cuenta.saldo = -200; // Intenta establecer un saldo negativo
// Imprime: Error: El saldo no puede ser negativo.
console.log(cuenta.saldo); // Imprime: 500 (el saldo no ha cambiado)