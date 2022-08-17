"use strict";

//event listener
document.querySelector("#btn-agregar").addEventListener("click", agregar);
document.querySelector("#btn-reset").addEventListener("click", reset);
document.querySelector("#borrar-ultimo").addEventListener("click", borrarUltimo);
document.querySelector("#btn-sortear").addEventListener("click", sortear);

//modelo de datos
let nombres = [];

// console.log();

function agregar(){
    let input = document.querySelector("#nombre");
    let nombre = input.value; 

    //agrego un elemento al arreglo
    nombres.push(nombre);
    console.log(nombres);

    //muestro el arreglo
    mostrar();

    //vaciar input
    input.value = "";
}

function mostrar(){
    let lista = document.querySelector("#listado");
    //primero vaciamos el listado por si las dudas
    lista.innerHTML = "";

    for(let elementoAcutal of nombres){
        lista.innerHTML += `<li> ${elementoAcutal} </li>`;
    }
}

function reset(){
    //vaciar el arreglo
    nombres = [];
    mostrar();
}

function borrarUltimo(){
    //vaciar el arreglo
    nombres.pop();
    mostrar();
}

function sortear(){
    let random = Math.floor(Math.random()*nombres.length);
    document.querySelector('#result').innerHTML = nombres[random];
}

