/*4.Crear una lista de tareas leídas desde un input. Solo se debe 
permitir un máximo de 10 tareas.  Use un arreglo para separar el modelo de la vista.*/

"use strict";

document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina(){

    let tasks = [];

    document.getElementById("btn-addTask").addEventListener("click", function(e){
        let input = document.getElementById("task");
        let task = input.value;

        if(tasks.length < 11){
            tasks.push(task);
        }
        
        mostrar()
        console.log(tasks);
        
        input.value = "";
    });

    
    function mostrar(){
        let ul = document.querySelector(".ul-tasks");
        ul.innerHTML = "";

        for(let i = 0; i < tasks.length; i++){  
            ul.innerHTML += `<li> ${tasks[i]} </li>`;
        } 
    }
   
}