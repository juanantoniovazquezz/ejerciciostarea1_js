const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Introduce el primer número: "));
let num2 = parseFloat(prompt("Introduce el segundo número: "));
let num3 = parseFloat(prompt("Introduce el tercer número: "));

if (num1 < 0) {
    console.log(`El resultado (producto) es: ${num1 * num2 * num3}`);
} else {
    console.log(`El resultado (suma) es: ${num1 + num2 + num3}`);
}
