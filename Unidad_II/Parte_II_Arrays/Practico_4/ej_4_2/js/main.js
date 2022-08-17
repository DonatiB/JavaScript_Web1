/*4.Crear una lista de tareas leídas desde un input. Solo se debe 
permitir un máximo de 10 tareas.  Use un arreglo para separar el modelo de la vista.*/

"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    initializationCode();

    function initializationCode(){
        const d = document;
        let tasks = [];

        let input = d.createElement("input");
        input.placeholder = "Insert Task";
        d.body.appendChild(input);

        let btn = d.createElement("button");
        btn.innerText = "Send";
        d.body.appendChild(btn);

        let ul = d.createElement("ul");
        d.body.appendChild(ul);

        btn.addEventListener("click", (e) => {
            addTask(tasks, input, ul);      
        });      
    }

    function addTask(tasks, input, ul){
        let task = input.value;

        if(task && task != ""){
            if(tasks.length<10){
                tasks.push(task); 
            }else{
                alert("No puede superar la cantidad de tareas maximas (10)");
            }    
        }

        viewTasks(tasks, ul);

        console.log(tasks);
        input.value = "";
    }

    function viewTasks(tasks, ul){
        ul.innerHTML = "";

        for (let i = 0; i < tasks.length; i++) {
            ul.innerHTML += `<li>${tasks[i]}</li>`;  
        }
    }
}