/*3.Crear un botón de toggle que aplique una clase a todos los títulos, y 
volviendo a apretar vuelva a la apariencia original.*/

"use strict";

document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina(){
     
    document.querySelector(".btn-title").addEventListener("click", function(e){
        
        let titles = document.querySelectorAll(".titles");
        
        for(let i = 0; i < titles.length; i++){
            titles[i].classList.toggle("apariencia");
        }
    });
}