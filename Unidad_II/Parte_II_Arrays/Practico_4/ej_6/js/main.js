/*6.Modifique la lista de tareas para que además de tener un límite, 
no se pueda agregar tareas repetidas*/

"use strict";

document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina(){

    let tasks = [];

    document.getElementById("btn-addTask").addEventListener("click", function(e){
        let input = document.getElementById("task");
        let task = input.value;

        if(tasks.length < 11 && task !=""){ 
            let bool = false; 

            for(let elem of tasks){
                if(task != elem && bool == false){   
                    bool = false;
                }else{
                    bool = true;
                }
            }

            if(bool == false){
                tasks.push(task);
            }
        }
        mostrar();
        input.value = "";
        console.log(tasks);
    });

    
    function mostrar(){
        let ul = document.querySelector(".ul-tasks");
        ul.innerHTML = "";

        for(let i = 0; i < tasks.length; i++){  
            ul.innerHTML += `<li> ${tasks[i]} </li>`;
        }   
    }
}