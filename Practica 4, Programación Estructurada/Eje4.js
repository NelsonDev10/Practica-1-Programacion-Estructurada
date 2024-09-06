
function procesarPedido(pedido) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            
            if (pedido && pedido.length > 0) {
                resolve(`Pedido recibido: ${pedido}`);
            } else {
                reject('El pedido está vacío.');
            }
        }, 2000); 
    });
}

procesarPedido('Pizza')
.then(res => {
    console.log('Mensaje: ' + res);
})
.catch(error => {
    console.log('Error: ' + error);
});