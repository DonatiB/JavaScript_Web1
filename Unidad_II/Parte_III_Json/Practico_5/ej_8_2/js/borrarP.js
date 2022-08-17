/*8.Implementar un botón que cada vez que sea clickeado borre un párrafo de la página, 
empezando desde el último al primero.*/

document.addEventListener("DOMContentLoaded", borrarP);

function borrarP(){
    "use strict";

    const d = document;

    d.querySelector("button").addEventListener("click", e => {
        borrarUltimoParrafo1();
        borrarUltimoParrafo2();
    });

    function  borrarUltimoParrafo1(){
        let div = d.querySelector("div");   
        let ultimoP = div.lastElementChild;
        ultimoP.remove();
    }
    function  borrarUltimoParrafo2(){
        let p = d.querySelectorAll("p");
        let posUltimoP = p.length - 1; 
        if(posUltimoP >= 0){
            p[posUltimoP].remove(); 
        }
    }
}