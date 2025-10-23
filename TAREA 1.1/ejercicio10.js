// ejercicio10.js
// Programa que valida una fecha y la imprime con el nombre del mes

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Array con los nombres de los meses
const meses = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
];

rl.question("Introduce el día: ", (dia) => {
  rl.question("Introduce el mes (número): ", (mes) => {
    rl.question("Introduce el año: ", (anio) => {
      dia = parseInt(dia);
      mes = parseInt(mes);
      anio = parseInt(anio);

      // Comprobamos que el año sea mayor que 0
      if (anio <= 0) {
        console.log("Error: el año debe ser mayor que 0.");
        rl.close();
        return;
      }

      // Comprobamos que el mes sea válido
      if (mes < 1 || mes > 12) {
        console.log("Error: el mes debe estar entre 1 y 12.");
        rl.close();
        return;
      }

      // Comprobamos el número de días según el mes
      let diasMes;
      switch (mes) {
        case 2:
          // Febrero: comprobamos si es bisiesto
          diasMes = (anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0)) ? 29 : 28;
          break;
        case 4: case 6: case 9: case 11:
          diasMes = 30;
          break;
        default:
          diasMes = 31;
      }

      if (dia < 1 || dia > diasMes) {
        console.log("Error: el día no es válido para ese mes.");
      } else {
        console.log(`${dia} de ${meses[mes - 1]} de ${anio}`);
      }

      rl.close();
    });
  });
});
