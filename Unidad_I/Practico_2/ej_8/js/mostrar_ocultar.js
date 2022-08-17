/*6.Crear una html que tenga un contenedor (div) con información y un botón. 
Cree una función Javascript que oculte o muestre l div que contiene la información.*/

let btn = document.querySelector(".btn-mostrar-ocultar").addEventListener("click", mostrarOcultar);

function mostrarOcultar(){
    let div = document.querySelector(".div-info");
    div.classList.toggle("div-info-oculta");
}