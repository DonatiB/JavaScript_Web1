/*7.Crear tres botones que permitan contar elementos en una página. 
El primero debe contar el total de párrafos “<p>”
El segundo la cantidad de items de una lista con id “lista-menu”
El tercero el total de divs con la clase “noticia”*/

document.addEventListener("DOMContentLoaded", botones);

function botones(){
    "use strict";

    const d = document;

    d.getElementById("btn1").addEventListener("click", e => {
        let p = d.querySelectorAll("p");
        console.log(p);
        console.log(p.length);
    });
    d.getElementById("btn2").addEventListener("click", e => {
        let ul = d.getElementById("lista-menu");
        console.log(ul.children);
        console.log(ul.children.length);
        
    });
    d.getElementById("btn3").addEventListener("click", e => {
        let div =  d.getElementsByClassName("noticia");
        console.log(div);
        console.log(div.length);
    });
}