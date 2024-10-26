class Usuario {
    constructor(username) {
        this._username = username;
    }

    // Getter para obtener el nombre de usuario
    get username() {
        return this._username;
    }

    // Setter para validar el nombre de usuario
    set username(username) {
        if (username.length >= 3) {
            this._username = username;
        } else {
            console.log(`El nombre de usuario '${username}' debe tener al menos 3 caracteres.`);
        }
    }
}

const usuario = new Usuario('Luz');
console.log(`Nombre válido: ${usuario.username}`); // 'Luz'

usuario.username = 'Lu'; // Nombre de usuario muy corto
// Mensaje: "El nombre de usuario debe tener al menos 3 caracteres."

usuario.username = 'Lupe'; // Nombre válido
console.log(`Nombre válido: ${usuario.username}`); // 'Lupe'
