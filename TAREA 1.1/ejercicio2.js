const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el primer número: ', (num1) => {
  rl.question('Introduce el segundo número: ', (num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    let suma = num1 + num2;
    let resta = num1 - num2;
    let producto = num1 * num2;
    let division = num2 !== 0 ? num1 / num2 : '(Indefinida division entre 0)';

    console.log('\nResultados:');
    console.log(`Suma: ${suma}`);
    console.log(`Resta: ${resta}`);
    console.log(`Producto: ${producto}`);
    console.log(`División: ${division}`);

    rl.close();
  });
});

