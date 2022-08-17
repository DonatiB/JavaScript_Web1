/*4.Crear un html con 3 botones de distinto color. Agregar 
la funcionalidad para que se muestre en un párrafo un mensaje que 
avise cuál de los botones fue el último cliqueado.*/

let btnVioleta = document.querySelector(".btn-violeta");
btnVioleta.addEventListener("click", mensajeVioleta);

let btnCoral = document.querySelector(".btn-coral");
btnCoral.addEventListener("click", mensajeCoral);

let btnCeleste = document.querySelector(".btn-celeste");
btnCeleste.addEventListener("click", mensajeCeleste);

function mensajeVioleta(){
    let mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "Boton violeta cliqueado"
}

function mensajeCoral(){
    let mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "Boton coral cliqueado"
}

function mensajeCeleste(){
    let mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "Boton celeste cliqueado"
}