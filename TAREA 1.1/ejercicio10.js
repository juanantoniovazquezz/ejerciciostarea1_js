const prompt = require('prompt-sync')();

const meses = ["", "enero", "febrero", "marzo", "abril", "mayo", "junio",
               "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

let dia = parseInt(prompt("Día: "));
let mes = parseInt(prompt("Mes (1-12): "));
let año = parseInt(prompt("Año: "));

const esBisiesto = a => (a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0);

let maxDias = mes === 2 ? (esBisiesto(año) ? 29 : 28)
            : [4,6,9,11].includes(mes) ? 30 : 31;

if (año > 0 && mes >= 1 && mes <= 12 && dia >= 1 && dia <= maxDias) {
    console.log(`${dia} de ${meses[mes]} de ${año}`);
} else {
    console.log("Fecha no válida");
}


