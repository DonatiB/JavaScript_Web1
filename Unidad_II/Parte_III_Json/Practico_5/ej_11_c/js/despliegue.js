/*11.Realice otra vez el ejercicio 5 y 11 del TP4. 
¿Qué cambios haría para poder simplificar y reutilizar más el código?
Investigue con el material de la cátedra cómo se recorre el DOM y 
como se puede localizar un elemento cercano dentro del árbol.*/

document.addEventListener("DOMContentLoaded", despliegue);

function despliegue(){
    "use strict";

    const d = document;

    let btns = d.querySelectorAll(".btn");
    btns.forEach(element => {
        element.addEventListener("click", e => {
            let p = element.nextElementSibling;
            p.classList.toggle("p");
        });
    }); 
}