class Articulo {
    constructor(nombre, precio, stock) {
        this._nombre = nombre;
        this._precio = precio;
        this._stock = stock;
    }

    comprar(cantidad) {
        if (cantidad > 0 && this._stock > 0 && this._stock - cantidad >= 0) {
            this._stock -= cantidad;
            let total = this._precio * cantidad;

            if (cantidad > 1) {
                console.log(`Usted ha comprado ${cantidad} unidades del producto ${this._nombre} - Total: ${total}`);
            } else {
                console.log(`Usted ha comprado ${cantidad} unidad del producto ${this._nombre} - Total: ${total}`);
            }

        } else if (this._stock <= 0) {
            console.log(`El producto ${this._nombre} actualmente está agotado.`);
        } else if (this._stock - cantidad < 0) {
            console.log(`La cantidad que quiere comprar es demasiado alta, actualmente solo hay ${this._stock} unidades del producto ${this._nombre}.`);
        } else {
            console.log(`La cantidad que quiere comprar no puede ser menor que 1.`);
        }
    }

    reabastecer(cantidad) {
        if (cantidad > 0) {
            this._stock += cantidad; 
            console.log(`Reabasteciendo el stock - Cantidad disponible del producto ${this._nombre} - ${this._stock}`);
        } else {
            console.log("La cantidad que desea reabastecer no puede ser negativa y debe ser mayor a 0.");
        }
    }
}

const ART = new Articulo("Jabon", 20, 10);

ART.comprar(11); 
ART.comprar(1); 

ART.reabastecer(20); 

ART.comprar(15); 