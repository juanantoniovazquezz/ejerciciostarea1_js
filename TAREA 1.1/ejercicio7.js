// ejercicio7.js
// Programa que calcula el precio final de una compra con descuento del 15% en octubre

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Introduce el mes (nombre o número): ", (mes) => {
  rl.question("Introduce el importe de la compra: ", (importe) => {
    // Convertimos el importe a número
    importe = parseFloat(importe);

    // Convertimos el mes a minúsculas para comparar
    mes = mes.toLowerCase();

    let total = importe;

    // Si es octubre, aplicamos el descuento del 15%
    if (mes === "octubre" || mes === "10") {
      total = importe * 0.85; // 15% de descuento
      console.log(`\nMes de octubre: se aplica un 15% de descuento.`);
    } else {
      console.log(`\nNo hay descuento en este mes.`);
    }

    console.log(`Importe a cobrar al cliente: $${total.toFixed(2)}`);

    rl.close();
  });
});
