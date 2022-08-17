/*6.Modifique la lista de tareas para que además de tener un límite, 
no se pueda agregar tareas repetidas*/

document.addEventListener("DOMContentLoaded", startCode);

function startCode(){
    "use strict";

    let tareas = [];
    const d = document;
    
    d.querySelector("#btn-agregar").addEventListener("click", e => {
        e.preventDefault();
        agregarTarea();
    });

    function agregarTarea(){
        let input = d.querySelector("#input-tarea");
        let tarea = input.value;

        let repetida= tareaRepetida(tarea);
        if(repetida === false){
            if((tareas.length < 10) && (input.value !== "")){
                tareas.push(tarea);
            }
        }
        
        mostrar();
        input.value = "";
    }

    function mostrar(){
        let ul = d.querySelector("#lista-tareas");
        ul.innerHTML = "";

        tareas.forEach(e => {
            ul.innerHTML += `<li> ${e} </li>`
        });
    }

    function tareaRepetida(tarea){
        let repetida;

        if(tareas.length === 0){
            repetida = false;
        }

        tareas.forEach(e => {
            if(e === tarea){
                repetida = true;
            }else{
                repetida = false;
            }
        });

        return repetida;
    }
}