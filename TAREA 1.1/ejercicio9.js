// ejercicio9.js
// Programa que indica si una persona puede acceder a un ciclo formativo de grado superior

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("¿Tienes título de bachiller? (sí/no): ", (bachiller) => {
  bachiller = bachiller.toLowerCase();

  if (bachiller === "sí" || bachiller === "si") {
    console.log("¡Puedes acceder al ciclo formativo de grado superior!");
    rl.close();
  } else if (bachiller === "no") {
    rl.question("¿Has superado la prueba de acceso? (sí/no): ", (prueba) => {
      prueba = prueba.toLowerCase();

      if (prueba === "sí" || prueba === "si") {
        console.log("¡Puedes acceder al ciclo formativo de grado superior!");
      } else {
        console.log("No puedes acceder al ciclo formativo de grado superior.");
      }

      rl.close();
    });
  } else {
    console.log("Respuesta no válida. Por favor, escribe 'sí' o 'no'.");
    rl.close();
  }
});
