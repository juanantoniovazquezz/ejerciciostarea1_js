const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Introduce el primer número: "));
let num2 = parseFloat(prompt("Introduce el segundo número: "));

console.log(`Suma: ${num1 + num2}`);
console.log(`Resta: ${num1 - num2}`);
console.log(`Producto: ${num1 * num2}`);
console.log(`División: ${num2 !== 0 ? (num1 / num2).toFixed(2) : "Error: división entre 0"}`);
