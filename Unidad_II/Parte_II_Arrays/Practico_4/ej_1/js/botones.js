/*1.Reescriba el ejercicio 3 del Práctico 02 JS pero utilizando funciones 
anónimas para poder pasar parámetros. ¿Cuál de las dos maneras le parece mejor? 
TP 2 Ejer 3: Crear 3 botones de distinto color. Agregar la funcionalidad para 
que se muestre en un párrafo un mensaje que avise cual de los botones fue el último cliqueado.*/

document.addEventListener("DOMContentLoaded", iniciaPagina);

function iniciaPagina(){

    let mensaje = document.getElementById("mensaje");

    document.querySelector(".btn-violeta").addEventListener("click", function(e){
        mensaje.innerHTML = "Boton violeta cliqueado"
    });

    document.querySelector(".btn-coral").addEventListener("click", function(e){
        mensaje.innerHTML = "Boton coral cliqueado"
    });

    document.querySelector(".btn-celeste").addEventListener("click", function(e){
        mensaje.innerHTML = "Boton celeste cliqueado"
    });

}


