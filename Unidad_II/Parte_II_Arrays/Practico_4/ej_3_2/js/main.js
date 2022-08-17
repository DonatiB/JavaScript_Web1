/*3.Crear un botón de toggle que aplique una clase a todos los títulos, y 
volviendo a apretar vuelva a la apariencia original.*/

"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    initializationCode();

    function initializationCode(){
        const d = document;
        let titles = [];
   
        for (let i = 1; i < 7; i++) {
            let title = d.createElement(`h${i}`);
            title.innerText = `title h${i}`;
            titles.push(title);
        }
            
        let btn = d.createElement("button");
        btn.innerText = "Modified h1";
        d.body.appendChild(btn);
        btn.addEventListener("click", (e) => {
            addClass(titles);
        });

        view(titles, d);
        console.log(titles);
    }

    function view(titles, d){
        let body = d.body;
        let ul = d.createElement("ul");
        body.appendChild(ul);

        for (let i = 0; i < titles.length; i++) {
            ul.appendChild(titles[i]);
            ul.innerNode += titles[i];
        }
    }

    function addClass(titles){
        for (let i = 0; i < titles.length; i++) {
            let h1 = titles[i];
            h1.classList.toggle("h1");
        }   
    }
}