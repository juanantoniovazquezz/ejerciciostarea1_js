const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Introduce un número entero: "));

if (numero === 0) {
    console.log("El número no es par ni impar");
} else if (numero % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}
