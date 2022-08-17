/*5.Crear un tipo de botón Ver más que despliegue más contenido de texto.
El botón debe ser tipo toggle que muestre y esconda la información expandida. 
El botón se debe poder reutilizar en dos  partes del sitio, expandiendo la información 
específica de las secciones donde se utiliza. Es importante reutilizar las funciones creadas.*/

"use strict";
document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina(){

    let paragraph1 = document.querySelector(".dropdown1");
    let paragraph2 = document.querySelector(".dropdown2");

    document.querySelector(".btn-dropdown1").addEventListener("click", function(e){
        deploy(paragraph1);
    });

    document.querySelector(".btn-dropdown2").addEventListener("click", function(e){
        deploy(paragraph2);
    });
    
    function deploy(paragraph){
        paragraph.classList.toggle("deploy");
    }

    

}