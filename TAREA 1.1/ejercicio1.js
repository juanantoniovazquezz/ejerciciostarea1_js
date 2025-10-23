// Cargar prompt-sync
const prompt = require('prompt-sync')();

// Pedir al usuario los valores
let A = Number(prompt('Introduce el valor de A: '));
let B = Number(prompt('Introduce el valor de B: '));

console.log(`\nValores iniciales: A = ${A}, B = ${B}`);

// Intercambiar valores
[A, B] = [B, A]; // Forma moderna sin variable temporal

console.log(`Valores intercambiados: A = ${A}, B = ${B}`);



