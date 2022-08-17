/*11.Extender el ejercicio 6 para que podamos generar una tarjeta personal vía web. 
Debemos poder agregar Nombre, Apellido, Profesión, Email, Teléfono, Dirección. 
Una vez enviados los datos, estos deben aparecer en la página con apariencia y 
alineación de una tarjeta personal.*/

let enviar = document.getElementById("enviar").addEventListener("click", enviarTarea);


function enviarTarea(event){
    event.preventDefault();

    if(nombre.value != "" || apellido.value != "" || profesion.value != "" || email.value != "" 
        || telefono.value != "" || direccion.value != "" || tarea.value != ""){

        let tarjeta = document.createElement("div");
        containerTarjeta.appendChild(tarjeta);
        tarjeta.classList.add("tarjeta");
        let titulo = document.createElement("h1");
        titulo.innerHTML = "tarjeta";
        tarjeta.appendChild(titulo);

        let lista = document.createElement("ul");
        tarjeta.appendChild(lista);
        
        let liNombre = document.createElement("li");
        lista.appendChild(liNombre);
        let liApellido = document.createElement("li");
        lista.appendChild(liApellido);
        let liProfesion = document.createElement("li");
        lista.appendChild(liProfesion);
        let liEmail = document.createElement("li");
        lista.appendChild(liEmail);
        let liTelefono = document.createElement("li");
        lista.appendChild(liTelefono);
        let liDireccion = document.createElement("li");
        lista.appendChild(liDireccion);
        let liTarea = document.createElement("li");
        lista.appendChild(liTarea);

        liNombre.innerText = nombre.value;
        nombre.value = "";
        liApellido.innerText = apellido.value;
        apellido.value = "";
        liProfesion.innerText = profesion.value;
        profesion.value = "";
        liEmail.innerText = email.value;
        email.value = "";
        liTelefono.innerText = telefono.value;
        telefono.value = "";
        liDireccion.innerText = direccion.value;
        direccion.value = "";
        liTarea.innerText = tarea.value;
        tarea.value = "";
    }

    
}


let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let profesion = document.getElementById("profesion");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let direccion = document.getElementById("direccion");
let tarea = document.getElementById("tarea");

let containerTarjeta = document.querySelector(".container-tarjeta");

