/*6.Modifique la lista de tareas para que además de tener un límite, 
no se pueda agregar tareas repetidas*/

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
        
        if(task && task != "" && tasks.length<10){   
            let bool = false; 

            for(let elem of tasks){
               if(elem !== task && bool == false){
                    bool = false;
               }else{
                    bool = true;
               }
            }    
            
            if(bool == false){
                tasks.push(task); 
            }else{
                alert(`Tarea ${task} ya fue creada`);
            }   

        }else{
            alert("Tarea no existe - Tarea vacia - No puede superar la cantidad de tareas maximas (10)");
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