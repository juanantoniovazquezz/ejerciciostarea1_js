// ejercicio4.js
// Programa que pide tres números:
// Si el primero es negativo → muestra el producto de los tres
// Si no → muestra la suma de los tres

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Introduce el primer número: ", (num1) => {
  rl.question("Introduce el segundo número: ", (num2) => {
    rl.question("Introduce el tercer número: ", (num3) => {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      num3 = parseFloat(num3);

      if (num1 < 0) {
        let producto = num1 * num2 * num3;
        console.log(`\nEl primer número es negativo.`);
        console.log(`El producto de los tres es: ${producto}`);
      } else {
        let suma = num1 + num2 + num3;
        console.log(`\nEl primer número no es negativo.`);
        console.log(`La suma de los tres es: ${suma}`);
      }

      rl.close();
    });
  });
});
