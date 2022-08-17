/*11.Crear un botón que cambie el estilo de todos los párrafos que se encuentren 
después de un título h1.*/

"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;

    let btn = d.querySelector(".btn");
    btn.addEventListener("click", (e) => {
        addClass();
    });

    function addClass(){
        let parr = d.querySelectorAll("p");
        console.log(parr);
        
        let p = d.createElement("p");
        for (let i = 0; i < parr.length; i++) {
            p = parr[i];
            p.classList.toggle("p");
        }  
    }
}