/*10.Para el ejercicio 5:
a.Hacer un botón que recorra e imprima la tabla de posiciones en el HTML.
b.Insertar un nuevo equipo (con todos sus datos) desde un formulario. 
Una vez ingresado se debe actualizar la tabla en la página.*/

document.addEventListener("DOMContentLoaded", equipo);

function equipo(){
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

    let form = d.querySelector("#form");
    form.addEventListener("submit", agregarEquipo);

    function agregarEquipo(e){
        e.preventDefault();

        let formData = new FormData(form);
        let nombre = formData.get('nombre');
        let puntos = formData.get('puntos');
        let pj = formData.get('pj');
        let pg = formData.get('pg');
        let pe = formData.get('pe');
        let pp = formData.get('pp');

        let newTeam = {
            "nombre": nombre, 
            "puntos": puntos,
            "pj": pj,
            "pg": pg,
            "pe": pe,
            "pp": pp,
        }

        if((nombre && puntos && pj && pg && pe && pp)&&(nombre != "")&&(puntos != "")&&(pj != "")&&(pg != "")&&(pe != "")&&(pp != "" )){
            tabla.push(newTeam);
        }

        let inputs = d.querySelectorAll("input");
        inputs.forEach(element => {
            element.value = "";
        });

        imprimirTabla();
    }

    d.querySelector("#imprimir").addEventListener("click", e => {
        imprimirTabla();
    });
   
    function imprimirTabla(){
        let table = d.querySelector("#table-posiciones");
        table.innerHTML = "";

        let trCabecera = d.createElement('tr');
        table.appendChild(trCabecera);
        trCabecera.innerHTML = `<td>Nombre</td> <td>Puntos</td> <td>Pj</td> <td>Pg</td> <td>Pe</td> <td>Pp</td>`

        let aux;
        for (let i = 0; i < tabla.length; i++) {
            for (let j = i + 1; j < tabla.length; j++) {
                if(tabla[j].puntos > tabla[i].puntos){
                    aux = tabla[i];
                    tabla[i] = tabla[j];
                    tabla[j] = aux;
                }
            }
        }

        tabla.forEach(element => {
            let tr = d.createElement('tr');
            table.appendChild(tr);

            let tdNombre = d.createElement('td');
            tr.appendChild(tdNombre);
            tdNombre.innerHTML = element.nombre;

            let tdPuntos = d.createElement('td');
            tr.appendChild(tdPuntos);
            tdPuntos.innerHTML = element.puntos

            let tdPj = d.createElement('td');
            tr.appendChild(tdPj);
            tdPj.innerHTML = element.pj

            let tdPg = d.createElement('td');
            tr.appendChild(tdPg);
            tdPg.innerHTML = element.pg

            let tdPe = d.createElement('td');
            tr.appendChild(tdPe);
            tdPe.innerHTML = element.pe

            let tdPp = d.createElement('td');
            tr.appendChild(tdPp);
            tdPp.innerHTML = element.pp
        });
    }   
}