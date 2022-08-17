/*13.Hacer un menu principal que permita desplegar submenús con las siguientes características:
-Al parar el mouse sobre cada subitem se debe resaltar.
-Una vez que se clickee un ítem, se despliega el submenu con varios subitems. 
-El código debe poder reutilizarse para más de un ítem del menú principal, 
y para múltiples niveles de subitems.*/

"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;

    let header = d.querySelector("header");
    let divHeader = d.querySelector(".div_header");
    let deployMenu = d.querySelector("#btn_open");
    let iconShow = d.querySelector(".icon_menu");
    let itemsMenu = d.querySelectorAll(".div_item-menu");
    let subMenu = d.querySelectorAll(".submenu");

    deployMenu.addEventListener("click", function(e){
        divHeader.classList.toggle("div_header-show");
        header.classList.toggle("header");
        iconShow.classList.toggle("icon_menu");
        iconShow.classList.toggle("icon_menu-show");
    });

   
    for (let i = 0; i < itemsMenu.length; i++) {
        itemsMenu[i].addEventListener("mouseover", function(e){
            let li = this.firstElementChild;
            let subitem = li.lastElementChild; 
            subitem.classList.add("submenu-show");
        });
        itemsMenu[i].addEventListener("mouseout", function(e){
            let ul = this.firstElementChild;
            let subitem = ul.lastElementChild; 
            subitem.classList.remove("submenu-show");
        });
    }   
}