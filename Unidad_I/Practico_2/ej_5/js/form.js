/*5.Crear un formulario con Nombre, Apellido y un botón Enviar. Al presionar Enviar debe 
mostrar el nombre y apellido como un título dentro de la página. */

let enviarDatos = document.getElementById("enviar").addEventListener("click", enviar);

function enviar(event){
    event.preventDefault();

    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let parrafo = document.getElementById("parrafo");

    parrafo.innerHTML = "Nombre: " + nombre.value + ". " + " Apellido: " + apellido.value;
}

