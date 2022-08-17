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

    

    initializationCode();
    function initializationCode(){

        //creo el formulario con sus elementos
        let div = d.createElement("div");
        d.body.appendChild(div);

        let form = d.createElement("form");
        let inputName = d.createElement("input");
        let inputPoints = d.createElement("input");
        let inputPj = d.createElement("input");
        let inputPg = d.createElement("input");
        let inputPe = d.createElement("input");
        let inputPp = d.createElement("input");
        let btnSend = d.createElement("button");

        inputName.placeholder = "Name";
        inputPoints.placeholder = "Points";
        inputPj.placeholder = "Pj";
        inputPg.placeholder = "Pg";
        inputPe.placeholder = "Pe";
        inputPp.placeholder = "Pp";
        btnSend.innerText = "Send";

        inputName.type = "text";
        inputPoints.type = "number";
        inputPj.type = "number";
        inputPg.type = "number";
        inputPe.type = "number";
        inputPp.type = "number";

        inputName.name = "name";
        inputPoints.name = "points";
        inputPj.name = "pj";
        inputPg.name = "pg";
        inputPe.name = "pe";
        inputPp.name = "pp";

        div.appendChild(form);
        form.appendChild(inputName);
        form.appendChild(inputPoints);
        form.appendChild(inputPj);
        form.appendChild(inputPg);
        form.appendChild(inputPe);
        form.appendChild(inputPp);
        form.appendChild(btnSend);

        let arrayInputs = [inputName, inputPoints, inputPj, inputPg, inputPe, inputPp];

        //creo los elementos de la tabla 
        let btnViewPositions = d.createElement("button");     
        btnViewPositions.innerText = "Positions";
        d.body.appendChild(btnViewPositions);

        let divTable = d.createElement("div");
        let table = d.createElement("table");
        let thead = d.createElement("thead");
        let tbody = d.createElement("tbody");
        let trhead = d.createElement("tr");
        let th1 = d.createElement("th");
        let th2 = d.createElement("th");
        let th3 = d.createElement("th");
        let th4 = d.createElement("th");
        let th5 = d.createElement("th");
        let th6 = d.createElement("th");
       
        d.body.appendChild(divTable);
        div.appendChild(table);
        table.appendChild(thead);
        table.appendChild(tbody);
        thead.appendChild(trhead);
        trhead.appendChild(th1);
        trhead.appendChild(th2);
        trhead.appendChild(th3);
        trhead.appendChild(th4);
        trhead.appendChild(th5);
        trhead.appendChild(th6);
        
        th1.innerHTML = "Team";
        th2.innerHTML = "Points";
        th3.innerHTML = "Pj";
        th4.innerHTML = "Pg";
        th5.innerHTML = "Pe";
        th6.innerHTML = "Pp";

        form.addEventListener("submit", (e) => {
            send(e, form, arrayInputs, tbody);
        });

        btnViewPositions.addEventListener("click", (e) =>{
            viewTablePosition(tbody);
        });
    }

    function send(e, form, arrayInputs, tbody){
        e.preventDefault();

        let formData = new FormData(form);

        let name = formData.get('name');
        let points = formData.get('points');
        let pj = formData.get('pj');
        let pg = formData.get('pg');
        let pe = formData.get('pe');
        let pp = formData.get('pp');

        console.log(name, points, pj, pg, pe, pp);

        let newTeam = {
            "name": name,
            "points": points,
            "pj": pj,
            "pg": pg,
            "pe": pe,
            "pp": pp
        };

        if(name && points && pj && pg && pe && pp && name != "" && points != "" && pj != "" && pg != "" && pe != "" && pp != "" ){
            teams.push(newTeam);
        }
        
        //vaciamos inputs
        for (let i = 0; i < arrayInputs.length; i++) {
            arrayInputs[i].value = "";
        }

        viewTablePosition(tbody);
    }
    
    function viewTablePosition(tbody){
        tbody.innerHTML = "";

        let aux = 0;
        for (let i = 0; i < teams.length; i++) {
           for (let j = i + 1; j < teams.length; j++) {
                if(teams[j].points > teams[i].points){
                    aux = teams[i];
                    teams[i] = teams[j];
                    teams[j] = aux;
                }
            } 
        }

        for (let i = 0; i < teams.length; i++){
            
            let trbody = d.createElement("tr");
            let td1 = d.createElement("td");
            let td2 = d.createElement("td");
            let td3 = d.createElement("td");
            let td4 = d.createElement("td");
            let td5 = d.createElement("td");
            let td6 = d.createElement("td");

            td1.innerHTML = teams[i].name; 
            td2.innerHTML = teams[i].points;
            td3.innerHTML = teams[i].pj; 
            td4.innerHTML = teams[i].pg;
            td5.innerHTML = teams[i].pe; 
            td6.innerHTML = teams[i].pp;

            tbody.appendChild(trbody);
            trbody.appendChild(td1);
            trbody.appendChild(td2);
            trbody.appendChild(td3);
            trbody.appendChild(td4);
            trbody.appendChild(td5);
            trbody.appendChild(td6);   
        }
    }
}