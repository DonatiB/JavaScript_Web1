/*5.Crear un tipo de botón Ver más que despliegue más contenido de texto.
El botón debe ser tipo toggle que muestre y esconda la información expandida. 
El botón se debe poder reutilizar en dos  partes del sitio, expandiendo la información 
específica de las secciones donde se utiliza. Es importante reutilizar las funciones creadas.*/

"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;
    initializationCode();

    function initializationCode(){
        let btn1 = d.createElement("button");
        btn1.innerText = "See more";

        let btn2 = d.createElement("button");
        btn2.innerText = "See more";

        let div1 = d.createElement("div");
        div1.className = "div-1";
        d.body.appendChild(div1);
        
        //agrego btn2 debajo del tercer div
        d.body.appendChild(btn1);
       
        let div2 = d.createElement("div");
        div2.className = "div-2";
        d.body.appendChild(div2);
        
        let div3 = d.createElement("div");
        div3.className = "div-3";
        d.body.appendChild(div3);

        //agrego btn2 debajo del tercer div
        d.body.appendChild(btn2);
       
        let div4 = d.createElement("div");
        div4.className = "div-4";
        d.body.appendChild(div4);

        div1.innerHTML = "11111111111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis incidunt nisi assumenda facere ipsam, odit ut in dolorum et temporibus qui impedit laborum, velit sequi exercitationem quaerat iusto! Nihil, pariatur!"; 
        div2.innerHTML = "22222222222 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis incidunt nisi assumenda facere ipsam, odit ut in dolorum et temporibus qui impedit laborum, velit sequi exercitationem quaerat iusto! Nihil, pariatur!"; 
        div3.innerHTML = "33333333333 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis incidunt nisi assumenda facere ipsam, odit ut in dolorum et temporibus qui impedit laborum, velit sequi exercitationem quaerat iusto! Nihil, pariatur!"; 
        div4.innerHTML = "44444444444 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis incidunt nisi assumenda facere ipsam, odit ut in dolorum et temporibus qui impedit laborum, velit sequi exercitationem quaerat iusto! Nihil, pariatur!"; 

        btn1.addEventListener("click", (e) => {
            deployText(div2);
        });

        btn2.addEventListener("click", (e) => {
            deployText(div4);
        });   
    }

    function deployText(div){
        div.classList.toggle("divs");
    }
}