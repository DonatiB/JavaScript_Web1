/*13.Hacer un menu principal que permita desplegar submenús con las siguientes características:
-Al parar el mouse sobre cada subitem se debe resaltar.
-Una vez que se clickee un ítem, se despliega el submenu con varios subitems. 
-El código debe poder reutilizarse para más de un ítem del menú principal, 
y para múltiples niveles de subitems.*/

"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;
    let itemsMenu = d.querySelectorAll(".item_menu");
   
    itemsMenu.forEach(item => {
        item.addEventListener("mouseover", (e) => {
            item.classList.add("hover-item");
        });
        item.addEventListener("mouseout", (e) => {
            item.classList.remove("hover-item");     
        }); 
    });
     
    for (let i = 0; i < itemsMenu.length; i++) {
        itemsMenu[i].addEventListener("click", function(e){
            let subitem = this.lastElementChild; 
            subitem.classList.toggle("submenu-show");
        });
    } 
    
}