// ejercicio6.js
// Programa que calcula el porcentaje de niños y niñas en un curso

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Pedimos el número de niños
rl.question("Introduce el número de niños en el curso: ", (ninos) => {
  rl.question("Introduce el número de niñas en el curso: ", (ninas) => {
    ninos = parseInt(ninos);
    ninas = parseInt(ninas);

    let total = ninos + ninas;

    if (total === 0) {
      console.log("Error: El total de estudiantes no puede ser cero.");
    } else {
      let porcentajeNinos = (ninos / total) * 100;
      let porcentajeNinas = (ninas / total) * 100;

      console.log(`\nTotal de estudiantes: ${total}`);
      console.log(`Porcentaje de niños: ${porcentajeNinos.toFixed(2)}%`);
      console.log(`Porcentaje de niñas: ${porcentajeNinas.toFixed(2)}%`);
    }

    rl.close();
  });
});
