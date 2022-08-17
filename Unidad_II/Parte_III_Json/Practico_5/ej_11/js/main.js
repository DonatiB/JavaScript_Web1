/*11.Realice otra vez el ejercicio 5 y 11 del TP4. 
¿Qué cambios haría para poder simplificar y reutilizar más el código?
Investigue con el material de la cátedra cómo se recorre el DOM y 
como se puede localizar un elemento cercano dentro del árbol.*/

"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;

    let btns = d.querySelectorAll(".btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(e){
            let text = this.nextElementSibling;
            text.classList.toggle("deploy");
        });
    }
}