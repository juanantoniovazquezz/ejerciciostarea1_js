// ejercicio3.js
// Programa que lee dos números y muestra cuál es mayor o si son iguales

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Introduce el primer número: ", (num1) => {
  rl.question("Introduce el segundo número: ", (num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    console.log("\nResultado:");

    if (num1 > num2) {
      console.log(`El número mayor es: ${num1}`);
    } else if (num2 > num1) {
      console.log(`El número mayor es: ${num2}`);
    } else {
      console.log("Ambos números son iguales.");
    }

    rl.close();
  });
});
