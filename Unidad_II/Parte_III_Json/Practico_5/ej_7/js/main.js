/*7.Crear tres botones que permitan contar elementos en una página. 
El primero debe contar el total de párrafos “<p>”
El segundo la cantidad de items de una lista con id “lista-menu”
El tercero el total de divs con la clase “noticia”*/

"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;
    initializationCode();


    function initializationCode(){
        let btnParrafos = d.createElement("button");
        let btnUl = d.createElement("button");
        let btnDivs = d.createElement("button");
        btnParrafos.innerText = "Button Parrafos";
        btnUl.innerText = "Button li";
        btnDivs.innerText = "Button Divs"; 
        d.body.appendChild(btnParrafos);
        d.body.appendChild(btnUl);
        d.body.appendChild(btnDivs);
    
        btnParrafos.addEventListener("click", (e) => {
            let paragraphs = d.querySelectorAll("p");
            printConsole(paragraphs);
        });
        btnUl.addEventListener("click", (e) => {
            let ul = d.querySelector("#lista-menu");
            let lis = ul.children
            printConsole(lis);
        });
        btnDivs.addEventListener("click", (e) => {
            let divs = d.querySelectorAll(".noticia");
            printConsole(divs);
        });
    }

    function printConsole(elementos){
        console.log(elementos.length);
    }
}
    