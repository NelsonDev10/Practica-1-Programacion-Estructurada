class libro {
    constructor(titulo,autor,numero) {
        this._titulo= titulo;
        this._autor= autor;   
        this._anio= numero;
    }
    mostrarInfo(){
        console.log(`${this._titulo} del autor ${this._autor}, publicado en el año ${this._anio}`);
    }
}
let libro1 = new libro('Don Quijote','Miguel de cervantes','1605');


libro1.mostrarInfo()
