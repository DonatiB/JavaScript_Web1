/*1.Reescriba el ejercicio 3 del Práctico 02 JS pero utilizando funciones 
anónimas para poder pasar parámetros. ¿Cuál de las dos maneras le parece mejor? 
TP 2 Ejer 3: Crear 3 botones de distinto color. Agregar la funcionalidad para 
que se muestre en un párrafo un mensaje que avise cual de los botones fue el último cliqueado.*/

"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    initializationCode();

    function initializationCode(){
        const d = document;

        let btnViolet = d.createElement("button");
        btnViolet.className = "btn-violet";
        btnViolet.innerText = "Violet";
        d.body.appendChild(btnViolet);

        let btnCoral = d.createElement("button");
        btnCoral.className = "btn-coral";
        btnCoral.innerText = "Coral";
        d.body.appendChild(btnCoral);

        let btnBlue = d.createElement("button");
        btnBlue.className = "btn-blue";
        btnBlue.innerText = "Blue";
        d.body.appendChild(btnBlue);

        let div = d.createElement("div");
        div.className = "div";
        d.body.appendChild(div);

        btnViolet.addEventListener("click", (e) => {
            div.innerHTML = "Violet button clicked";
        });
        btnCoral.addEventListener("click", (e) => {
            div.innerHTML = "Coral button clicked";
        });
        btnBlue.addEventListener("click", (e) => {
            div.innerHTML = "Blue button clicked";
        });
    }
}