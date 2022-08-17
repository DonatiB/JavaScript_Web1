/*11.Realice otra vez el ejercicio 5 y 11 del TP4. 
¿Qué cambios haría para poder simplificar y reutilizar más el código?
Investigue con el material de la cátedra cómo se recorre el DOM y 
como se puede localizar un elemento cercano dentro del árbol.*/

document.addEventListener("DOMContentLoaded", despliegue);

function despliegue(){
    "use strict";

    const d = document;

    let h1 = d.querySelector("h1");
    let ps = d.querySelectorAll(".p-modificar");

    d.querySelector(".btn-p").addEventListener("click", e => {
        let p = h1.nextElementSibling;
        for (let i = 0; i < ps.length; i++) {
            if(p === ps[i]){
                for (let j = i; j < ps.length; j++) {
                    ps[j].classList.toggle("p1");
                } 
            }          
        }
    });
}