/*10.Para el ejercicio 5:
a.Hacer un botón que recorra e imprima la tabla de posiciones en el HTML.
b.Insertar un nuevo equipo (con todos sus datos) desde un formulario. 
Una vez ingresado se debe actualizar la tabla en la página.*/


"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;

    let teams = [
        {
            "name": "Barcelona FC",
            "points": 98,
            "pj": 35,
            "pg": 32,
            "pe": 2,
            "pp": 1
        },
        {
            "name": "Atlético de Madrid", 
            "points": 74,
            "pj": 35,
            "pg": 22,
            "pe": 8,
            "pp": 5, 
        },
        {
            "name": "Real Madrid",
            "points": 95,
            "pj": 35,
            "pg": 30,
            "pe": 5,
            "pp": 2
        },
        {
            "name": "Villareal FC",
            "points": 60,
            "pj": 35,
            "pg": 19,
            "pe": 4,
            "pp": 10
        },
        {
            "name": "Valencia",
            "points": 82,
            "pj": 35,
            "pg": 27,
            "pe": 7,
            "pp": 4
        }
    ];
    
    
    function viewTablePosition(){

        let div = d.createElement("div");
        let table = d.createElement("table");
        let thead = d.createElement("thead");
        let tbody = d.createElement("tbody");
        let trhead = d.createElement("tr");
        let th1 = d.createElement("th");
        let th2 = d.createElement("th");
       
        d.body.appendChild(div);
        div.appendChild(table);
        table.appendChild(thead);
        table.appendChild(tbody);
        thead.appendChild(trhead);
        trhead.appendChild(th1);
        trhead.appendChild(th2);
        
        th1.innerHTML = "Team";
        th2.innerHTML = "Position";

        teams.sort((a,b) => {
            if(a.points>b.points){
                return -1;
            }
            if(a.points<b.points){
                return 1;
            }
            return 0;
        });

        for (let i = 0; i < teams.length; i++){
            console.log(teams[i].points);

            let trbody = d.createElement("tr");
            let td1 = d.createElement("td");
            let td2 = d.createElement("td");
            tbody.appendChild(trbody);
            trbody.appendChild(td1);
            trbody.appendChild(td2);

            td1.innerHTML = teams[i].name; 
            td2.innerHTML = teams[i].points;
        }
    }
    
    // let btnViewPositions = d.createElement("button");
    // d.body.appendChild(btnViewPositions);
    // btnViewPositions.innerText = "Positions";
    // btnViewPositions.addEventListener("click", (e) =>{
    //     viewTablePosition();
    // });
   
}