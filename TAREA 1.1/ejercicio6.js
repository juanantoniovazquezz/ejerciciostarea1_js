const prompt = require('prompt-sync')();

let ninos = parseInt(prompt("Introduce el número de niños: "));
let ninas = parseInt(prompt("Introduce el número de niñas: "));

let total = ninos + ninas;

if (total > 0) {
    console.log(`Porcentaje de niños: ${(ninos / total * 100).toFixed(2)}%`);
