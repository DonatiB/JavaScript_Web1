/*6.Crear un arreglo de objetos JSON que sea la tabla entera de posiciones
del fútbol español que incluya los equipos. Pueden ser solo los primeros 5 equipos.
a.Analizar lo que muestra console.log(tabla)
b.Mostrar por consola las estadísticas del primer equipo
c.Mostrar por consola la cantidad de equipos de la tabla.
d.Imprimir usando el DOM la diferencia de puntos entre el primer y segundo equipo de la tabla.
*/

"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;

    let tabla = [
        {
            "nombre": "Barcelona FC",
            "puntos": 98,
            "pj": 35,
            "pg": 32,
            "pe": 2,
            "pp": 1
        },
        {
            "nombre": "Atlético de Madrid", 
            "puntos": 74,
            "pj": 35,
            "pg": 22,
            "pe": 8,
            "pp": 5, 
        },
        {
            "nombre": "Real Madrid",
            "puntos": 95,
            "pj": 35,
            "pg": 30,
            "pe": 5,
            "pp": 2
        },
        {
            "nombre": "Villareal FC",
            "puntos": 60,
            "pj": 35,
            "pg": 19,
            "pe": 4,
            "pp": 10
        },
        {
            "nombre": "Valencia",
            "puntos": 82,
            "pj": 35,
            "pg": 27,
            "pe": 7,
            "pp": 4
        },
    ];
    
    //JSON
    console.log(tabla); 
    //formato tabla
    console.table(tabla); 
    //estadísticas del primer equipo
    console.log(tabla[0]); 
    //cantidad de equipos de la tabla
    console.log(tabla.length);
    //Imprimir usando el DOM la diferencia de puntos entre el primer y segundo equipo de la tabla.
    let div = d.querySelector(".div");
    div.innerHTML = `<h4> ${tabla[0].nombre} tiene ${tabla[0].puntos} puntos </h4>
                    <h4> ${tabla[1].nombre} tiene ${tabla[1].puntos} puntos </h4>
                    <h2> Diferencia de puntos:  ${tabla[0].puntos - tabla[1].puntos} <h2>
    `;

}