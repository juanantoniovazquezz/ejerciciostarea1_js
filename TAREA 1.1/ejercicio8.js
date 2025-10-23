// ejercicio8.js
// Programa que indica si un número es par o impar
// Si el número es 0, indica que no es ni par ni impar

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Introduce un número entero: ", (num) => {
  num = parseInt(num); // Convertimos a entero

  if (num === 0) {
    console.log("El número no es par ni impar.");
  } else if (num % 2 === 0) {
    console.log(`El número ${num} es par.`);
  } else {
    console.log(`El número ${num} es impar.`);
  }

  rl.close();
});
