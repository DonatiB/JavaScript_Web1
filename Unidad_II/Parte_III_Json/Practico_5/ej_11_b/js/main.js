/*11.Realice otra vez el ejercicio 5 y 11 del TP4. 
¿Qué cambios haría para poder simplificar y reutilizar más el código?
Investigue con el material de la cátedra cómo se recorre el DOM y 
como se puede localizar un elemento cercano dentro del árbol.*/

"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;

    let btn = d.querySelector(".btn");
    let h1 =  d.querySelector("h1");
    let parr = d.querySelectorAll("p");

    btn.addEventListener("click", (e) => {
        for (let i = 0; i < parr.length; i++) {
            if(parr[i] == h1.nextElementSibling){
                for (let j = i; j < parr.length; j++) {
                    parr[j].classList.toggle("p"); 
                }
            }
        }
    });
}