/*11.Crear un botón que cambie el estilo de todos los párrafos que se encuentren 
después de un título h1.*/

"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;
    let elements = []

    initializationCode();
    
    function initializationCode(){
        let body = d.body;
        let div = d.createElement("div");
        body.appendChild(div);

        for (let i = 0; i < 10; i++) {
            if(i == 5){
                let h1 = d.createElement("h1");
                h1.innerText = "Titulo h1";
                elements.push(h1);
            }
            let p = d.createElement("p");
            p.innerText = `Parrafo ${i}`;
            elements.push(p);
        }

        for (let i = 0; i < elements.length; i++) {
            div.appendChild(elements[i]);
            div.innerNode += elements[i];
        }

        let btn = d.createElement("button");
        btn.innerText = "Button";
        div.appendChild(btn);
        btn.addEventListener("click", (e) => {
            addClass();
        });

        console.log(elements);
    }
    
    function addClass(){
        let h1 = d.createElement("h1");
        let p = d.createElement("p");
        
        for (let i = 0; i < elements.length; i++) {
            if(h1.nodeName == elements[i].nodeName){
                if(p.nodeName == elements[i+1].nodeName){
                    for (let index = i+1; index < elements.length; index++) {
                        elements[index].classList.toggle("p");
                    }
                } 
            }  
        }
    }
}