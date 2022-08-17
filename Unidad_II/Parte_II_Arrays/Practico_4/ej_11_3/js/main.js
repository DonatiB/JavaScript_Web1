/*11.Crear un botón que cambie el estilo de todos los párrafos que se encuentren 
después de un título h1.*/

"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;
    let elements = [];

    initializationCode();

    function initializationCode(){
        let btn = d.createElement("button");
        btn.innerText = "Button";
        d.body.appendChild(btn);

        for(let i = 0; i < 11; i++) {
            if(i == 5){
                let h1 = d.createElement("h1");
                h1.innerHTML = `Title H1`;
                elements.push(h1);
                d.body.appendChild(h1);
            }else{
                let p = d.createElement("p");
                p.innerHTML = `Parraph ${i}`;
                elements.push(p);
                d.body.appendChild(p);
            }
        }

        console.log(elements);
        
        btn.addEventListener("click", (e) => {
            addClass();
        });
    }


    function addClass(){
        let p = d.createElement("p");
        for (let i = 0; i < elements.length; i++) {
            if(elements[i].nodeName == p.nodeName){
                console.log(elements[i]);
                elements[i].classList.toggle("p");
            }  
        }  
    }
}