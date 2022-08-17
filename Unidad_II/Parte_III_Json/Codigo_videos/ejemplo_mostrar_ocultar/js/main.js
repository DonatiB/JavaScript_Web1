"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;
    
    //lo que vamos a hacer es agregarle el mismo evento a diferentes botones
    let btns = d.querySelectorAll(".btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(e){
            let texto = this.nextElementSibling; 
            texto.classList.toggle("ver");
            console.log(this);
        });
    }  
}