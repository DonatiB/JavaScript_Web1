/*5.Utilizando este objeto JSON para almacenar un equipo y sus datos en la tabla de posiciones:
    -Analizar lo que muestra console.log(equipo)
    -Mostrar por consola las estadísticas del equipo. 
*/

"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;

    let div = d.createElement("div");
    d.body.appendChild(div);
   
    let equipo = {
        "nombre": "Barcelona FC",
        "puntos": 98,
        "pj": 35,
        "pg": 32,
        "pe": 2,
        "pp": 1
    }

    div.innerHTML = equipo.pj;
    
    console.log(equipo);
    console.log(equipo.pj);
}
