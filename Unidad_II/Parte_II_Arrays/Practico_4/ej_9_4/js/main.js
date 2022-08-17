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
        divColor.classList.add("div-color-0");
        divContainer.appendChild(divColor);

        
        divColor.addEventListener("click", (e) => {
            for (let index = 0; index < 6; index++) {
                divColor.classList.remove(`div-color-${index}`);
            }
            divColor.classList.add(`div-color-0`);
            let i = 0;
            if(i < 6){
                let timer = setInterval(function(){
                    if(i == 6){
                        clearInterval(timer);   
                    }else{
                        divColor.classList.add(`div-color-${i}`);
                        console.log(i);
                        i++;
                    }
                }, 1000);  
            }
        });
    }
}