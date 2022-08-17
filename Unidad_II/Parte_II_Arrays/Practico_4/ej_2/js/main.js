/*2.Cree un contador que cuente de manera independiente los clicks que se van haciendo 
sobre tres botones.*/

document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina(){

    let div = document.querySelector("div");
    let arrayContador = [0, 0, 0];
    let contador;

    document.querySelector(".btn1").addEventListener("click", function(e){
        div.innerHTML = arrayContador[0];
        contador  = arrayContador[0];
        contador++;
        arrayContador[0] = contador++;;
        div.innerHTML = arrayContador[0];
    });;

    document.querySelector(".btn2").addEventListener("click", function(e){
        div.innerHTML = arrayContador[1];
        contador  = arrayContador[1];
        contador++;
        arrayContador[1] = contador++;;
        div.innerHTML = arrayContador[1];
    });;

    document.querySelector(".btn3").addEventListener("click", function(e){
        div.innerHTML = arrayContador[2];
        contador  = arrayContador[2];
        contador++;
        arrayContador[2] = contador++;;
        div.innerHTML = arrayContador[2];
    });;
    
}