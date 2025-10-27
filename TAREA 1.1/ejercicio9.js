const prompt = require('prompt-sync')();

let tieneBachiller = prompt("¿Tienes título de bachiller? (sí/no) ").toLowerCase();

if (tieneBachiller === "sí" || tieneBachiller === "si") {
    console.log("¡Puedes acceder al ciclo formativo de grado superior!");
} else if (tieneBachiller === "no") {
    let superoPrueba = prompt("¿Has superado la prueba de acceso? (sí/no) ").toLowerCase();
    
    if (superoPrueba === "sí" || superoPrueba === "si") {
        console.log("¡Puedes acceder al ciclo formativo de grado superior!");
    } else {
        console.log("Lo siento, no puedes acceder al ciclo formativo de grado superior.");
    }
} else {
    console.log("Respuesta no válida. Por favor escribe 'sí' o 'no'.");
}
    
