
let categoriaCliente = "Estudiante";
let totalCompra = 100.00; 
let descuento = 0;

if (categoriaCliente === "Estudiante") {
  descuento = 0.15; 
} else if (categoriaCliente === "Senior") {
  descuento = 0.20; 
} else if (categoriaCliente === "VIP") {
  descuento = 0.25; 
} else {
  descuento = 0.05; 
}

let totalConDescuento = totalCompra - (totalCompra * descuento);
console.log(`Categoría del cliente: ${categoriaCliente}`);
console.log(`Total de la compra: $${totalCompra.toFixed(2)}`);
console.log(`Descuento aplicado: ${(descuento * 100)}%`);
console.log(`Total con descuento: $${totalConDescuento.toFixed(2)}`);
