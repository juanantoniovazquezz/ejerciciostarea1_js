// ejercicio5.js
// Programa que lee un número y calcula su cuadrado y raíz cuadrada
// Si el número es 0 o negativo, muestra mensaje de error y termina

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Introduce un número: ", (num) => {
  num = parseFloat(num);

  if (num <= 0) {
    console.log("Error: El número debe ser mayor que 0. Programa finalizado.");
  } else {
    let cuadrado = Math.pow(num, 2);
    let raiz = Math.sqrt(num); // o también: Math.pow(num, 0.5)

    console.log(`\nDel número ${num}:`);
    console.log(`- Su potencia (cuadrado) es: ${cuadrado}`);
    console.log(`- Su raíz cuadrada es: ${raiz}`);
  }

  rl.close();
});
