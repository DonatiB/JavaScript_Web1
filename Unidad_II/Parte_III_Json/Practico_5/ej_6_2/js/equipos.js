/*6.Crear un arreglo de objetos JSON que sea la tabla entera de posiciones
del fútbol español que incluya los equipos. Pueden ser solo los primeros 5 equipos.
a.Analizar lo que muestra console.log(tabla)
b.Mostrar por consola las estadísticas del primer equipo
c.Mostrar por consola la cantidad de equipos de la tabla.
d.Imprimir usando el DOM la diferencia de puntos entre el primer y segundo equipo de la tabla.
*/

document.addEventListener("DOMContentLoaded", startCode);

function startCode(){
    "use strict";

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
            "puntos": 80,
            "pj": 35,
            "pg": 22,
            "pe": 8,
            "pp": 5, 
        },
        {
            "nombre": "Real Madrid", 
            "puntos": 74,
            "pj": 35,
            "pg": 25,
            "pe": 7,
            "pp": 4, 
        },
        {
            "nombre": "Villareal", 
            "puntos": 65,
            "pj": 35,
            "pg": 28,
            "pe": 10,
            "pp": 1, 
        },{
            "nombre": "Sevilla", 
            "puntos": 77,
            "pj": 35,
            "pg": 31,
            "pe": 3,
            "pp": 6, 
        }
    ];

    //A. Analizar lo que muestra console.log(tabla)
    console.log(tabla);

    //B. Mostrar por consola las estadísticas del primer equipo
    console.log(tabla[0]);

    //C. Mostrar por consola la cantidad de equipos de la tabla.
    console.log(tabla.length);

    //D. Imprimir usando el DOM la diferencia de puntos entre el primer y segundo equipo de la tabla.
    let form = d.querySelector("#form");
    form.addEventListener("submit", obtenerDiferencia);

    function obtenerDiferencia(e){
        e.preventDefault();

        let formData = new FormData(form);
        let equipo1 = formData.get('equipo1');
        let equipo2 = formData.get('equipo2');

        let posEquipo1;
        let posEquipo2;
        let diferencia;

        for (let i = 0; i < tabla.length; i++) {
            if(tabla[i].nombre === equipo1){
                posEquipo1 = tabla[i];
            }
            if(tabla[i].nombre === equipo2){
                posEquipo2 = tabla[i];
            }
        }

        if((posEquipo1.puntos > posEquipo2.puntos) || (posEquipo1.puntos === posEquipo2.puntos)){
            diferencia = posEquipo1.puntos - posEquipo2.puntos;
        }else{
            diferencia = posEquipo2.puntos - posEquipo1.puntos
        }

        mostrar(diferencia);
    }
    
    function mostrar(diferencia){
        let div = d.querySelector("#diferencia");
        div.innerHTML = diferencia;
    }
}