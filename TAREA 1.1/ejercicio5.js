const prompt = require('prompt-sync')();

let numero = parseFloat(prompt("Introduce un número: "));

if (numero <= 0) {
    console.log("Error: el número debe ser mayor que 0. Saliendo del programa.");
} else {
    let cuadrado = numero ** 2;
    let raiz = Math.sqrt(numero);
    console.log(`Del número ${numero}, su potencia es ${cuadrado} y su raíz es ${raiz.toFixed(2)}`);
}
