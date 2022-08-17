/*6.Crear una html que tenga un contenedor (div) con información y un botón. 
Cree una función Javascript que oculte o muestre l div que contiene la información.*/

"use strict";

const d = document;

let btn = d.querySelector(".mostrar-ocultar").addEventListener("click", (e)=>{
    let div = d.querySelector(".div");
    div.classList.toggle("div_ocultar");
});