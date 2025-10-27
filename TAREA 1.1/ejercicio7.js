const prompt = require('prompt-sync')();

let mes = prompt("Introduce el mes: ").toLowerCase();
let importe = parseFloat(prompt("Introduce el importe de la compra: "));

let total = (mes === "octubre") ? importe * 0.85 : importe;

console.log(`Cantidad a cobrar: ${total.toFixed(2)}`);
