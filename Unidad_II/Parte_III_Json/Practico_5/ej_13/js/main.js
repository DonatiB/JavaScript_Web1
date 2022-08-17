/*13.Hacer un menu principal que permita desplegar submenús con las siguientes características:
-Al parar el mouse sobre cada subitem se debe resaltar.
-Una vez que se clickee un ítem, se despliega el submenu con varios subitems. 
-El código debe poder reutilizarse para más de un ítem del menú principal, 
y para múltiples niveles de subitems.*/

"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;

    //Ejecutar funcion en el evento click
    d.querySelector("#btn_open").addEventListener("click", menuOpenClose);

    //Declaramos variables
    let menuSide = d.querySelector("#menu_side");
    let body = d.querySelector("#body");

    //Evento para ocultar y mostrar menu
    function menuOpenClose(){
        body.classList.toggle("body_move");
        menuSide.classList.toggle("menu__side_move");
    }

    //si el ancho de la pagina es menor a 760px, ocultara el menu al recargarse la pagina
    if(window.innerWidth < 760){
        body.classList.add("body_move");
        menuSide.classList.add("menu__side_move");
    }

    //haciendo el menu responsive adaptable
    window.addEventListener("resize", function(e){
        
        if(window.innerWidth > 760){
            body.classList.remove("body_move");
            menuSide.classList.remove("menu__side_move");
        }

        if(window.innerWidth < 760){
            body.classList.add("body_move");
            menuSide.classList.add("menu__side_move");
        }
    });
}