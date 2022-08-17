/*8.Cree un calculador de notas finales de un alumno. El sistema debe permitir 
ingresar las notas desde un input de texto (una por una, sin límites) y 
mediante otro botón se debe informar el promedio del alumno.*/

"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;
    let notes = [];

    initializationCode();

    function initializationCode(){
        let input = d.createElement("input");
        input.placeholder = "Note";
        d.body.appendChild(input);

        let btnSend = d.createElement("button");
        btnSend.innerText = "Send";
        d.body.appendChild(btnSend);

        let ul = d.createElement("ul");
        d.body.appendChild(ul);

        let btnAverage = d.createElement("button");
        btnAverage.innerText = "Average";
        d.body.appendChild(btnAverage);

        let div = d.createElement("div");
        d.body.appendChild(div);

        btnSend.addEventListener("click", (e) => {
            insertNote(input, ul);
        });
        btnAverage.addEventListener("click", (e) => {
            averageCalculate(div);
        });
    }

    function insertNote(input, ul){
        let noteInput = input.value;
        let note = Number(noteInput);

        if(note && note != ""){
            notes.push(note);
        }

        viewUl(ul)
        input.value = "";
        console.log(notes);
    }

    function averageCalculate(div){
        let sum = 0; 

        for (let i = 0; i < notes.length; i++) {
            sum  = sum + notes[i];
        }
        let average = sum / notes.length;

        console.log(sum);
        console.log(average);

        viewAverage(div, average);
    }

    function viewUl(ul){
        ul.innerHTML = "";

        for (let i = 0; i < notes.length; i++) {
            ul.innerHTML += `<li>${notes[i]}</li>`;
        }
    }

    function viewAverage(div, average){
        div.innerHTML = average;   
    }
}