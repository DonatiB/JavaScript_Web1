/*9.Hacer una clase que al agregarla a un div, haga que cambie de color cada 0.5 segundos. 
De mínimo debe haber 5 colores.*/

"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;
    initializationCode();
    
    function initializationCode(){
        let body = d.body;
        let divContainer =  d.createElement('div');
        divContainer.classList.add("div-container");
        body.appendChild(divContainer);

        let divColor =  d.createElement('div');
        divColor.classList.add("div-color");
        divContainer.appendChild(divColor);

        divColor.addEventListener("click", (e) => {modifiedColorDiv(divColor);});
    }

    function modifiedColorDiv(divColor){
        let colors = ["blue", "red", "violet", "brown", "cyan"];
        let i = 0;
        console.log(colors);
        if(i < colors.length){
            let timer = setInterval(function(){
                if(i == colors.length){
                    clearInterval(timer); 
                }else{
                    divColor.style.background = colors[i];
                    console.log(colors[i]);
                    console.log(i);
                    i++;
                }
            }, 1000);
        }
    }
}