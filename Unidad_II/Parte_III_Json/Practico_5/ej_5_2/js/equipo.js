/*5.Utilizando este objeto JSON para almacenar un equipo y sus datos en la tabla de posiciones:
    -Analizar lo que muestra console.log(equipo)
    -Mostrar por consola las estadísticas del equipo. 
*/

document.addEventListener("DOMContentLoaded", startCode);

function startCode(){
    "use strict";

    let equipo = {
        "nombre": "Barcelona FC",
        "puntos": 98,
        "pj": 35,
        "pg": 32,
        "pe": 2,
        "pp": 1
    }

    console.log(equipo);
    console.log(equipo.puntos);
    console.log(equipo.pj);
    console.log(equipo.pg);
    console.log(equipo.pe);
    console.log(equipo.pp);
}