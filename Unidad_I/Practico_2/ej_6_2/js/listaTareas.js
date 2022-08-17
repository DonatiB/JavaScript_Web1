/*6.Cree una “Lista de Tareas” donde cada tarea se agrega desde un input de texto.*/

const d = document;
let tarea = d.querySelector("#tarea");
let lista = d.querySelector(".lista-tareas");

let btn = d.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();

    if(tarea.value != ""){
        let li = d.createElement("li");
        lista.appendChild(li);
        li.innerHTML = tarea.value;
    }
    
    tarea.value = "";
});

