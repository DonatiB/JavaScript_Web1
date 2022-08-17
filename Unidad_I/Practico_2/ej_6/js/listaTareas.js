/*6.Cree una “Lista de Tareas” donde cada tarea se agrega desde un input de texto.*/

let enviar = document.getElementById("enviar").addEventListener("click", enviarTarea);

function enviarTarea(event){
    event.preventDefault();

    let tarea = document.getElementById("tarea");
    let lista = document.getElementById("lista");

    let li = document.createElement("li");
    lista.appendChild(li);
    li.innerText = tarea.value;
}