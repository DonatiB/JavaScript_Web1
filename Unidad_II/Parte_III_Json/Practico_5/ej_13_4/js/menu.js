/*13.Hacer un menu principal que permita desplegar submenús con las siguientes características:
-Al parar el mouse sobre cada subitem se debe resaltar.
-Una vez que se clickee un ítem, se despliega el submenu con varios subitems. 
-El código debe poder reutilizarse para más de un ítem del menú principal, 
y para múltiples niveles de subitems.*/

document.addEventListener("DOMContentLoaded", menu);

function menu(){
    "use strict";

    const d = document;

    let item =  d.querySelectorAll(".item");
    item.forEach(element => {
        aplicarClases(element); 
    });

    let subitem = d.querySelectorAll(".subitem");
    subitem.forEach(element => {
        aplicarClases(element);
    });

    function aplicarClases(element){
        element.addEventListener("mouseover", e => {
            element.classList.add("h4");
        });
        element.addEventListener("mouseout", e => {
            element.classList.remove("h4")
        });
        element.addEventListener("click", e => {
            desplegarItem(element); 

        });
    }


    function desplegarItem(element){
        let li = element.nextElementSibling;
        li.classList.toggle("ul-display");
    }
}