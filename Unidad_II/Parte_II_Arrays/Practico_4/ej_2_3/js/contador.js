/*2.Cree un contador que cuente de manera independiente los clicks que se van haciendo 
sobre tres botones.*/

"use strict";
document.addEventListener("DOMContentLoaded", startCounter);

function startCounter(){

    const d = document;
    let span1 =  document.querySelector("#span1");
    let span2 =  document.querySelector("#span2");
    let span3 =  document.querySelector("#span3");
    let contador = 0;
    let arrayContador = [0, 0, 0]

    document.querySelector("#btn1").addEventListener("click", e =>{
        let i = 0;
        incrementar(span1, contador, i);
    });
    document.querySelector("#btn2").addEventListener("click", e =>{
        let i = 1;
        incrementar(span2, contador, i);
    });
    document.querySelector("#btn3").addEventListener("click", e =>{
        let i = 2;
        incrementar(span3, contador, i);
    });
    
    function incrementar(span, contador, i){
        contador = arrayContador[i];
        contador++;
        arrayContador[i] = contador;
        viewContador(span, i);
    }

    function viewContador(span, i){
        span.innerHTML = `${arrayContador[i]}`;
    }
    
}