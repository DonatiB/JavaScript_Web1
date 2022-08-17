/*8.Implementar un botón que cada vez que sea clickeado borre un párrafo de la página, 
empezando desde el último al primero.*/

"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;
    let elementos = [];
    initializationCode();

    function initializationCode(){
        let btn = d.createElement("button");
        btn.innerText = "Button";
        d.body.appendChild(btn);

        let ul = d.createElement("ul");
        d.body.appendChild(ul);
        
        for (let i = 1; i < 11 ; i++) {
            let li = d.createElement("li");
            let p = d.createElement("p");
            p.innerHTML = `Paragraps ${i}`;
            li.appendChild(p);
            ul.appendChild(li);
            elementos.push(p);
        }
        
        btn.addEventListener("click", (e) => {
            if(elementos.length != 0){
                ul.lastElementChild.remove();
                elementos.pop();
                console.log(elementos);
            }
        });
    }
}

