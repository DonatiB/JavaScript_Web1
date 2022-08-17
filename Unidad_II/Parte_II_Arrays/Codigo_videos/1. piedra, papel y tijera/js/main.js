"use strict";

//event listener al boton "jugar"
let btn = document.querySelector('#btn-play');
btn.addEventListener('click', jugar);

//declaro el arreglo
let opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];

function jugar(){
    //generamos un numero random entre 0 y 2
    let random = Math.floor(Math.random()* opciones.length);

    //accedemos al arreglo a traves de la variable random que tiene un numero aleatorio entre 0 y el tamaño deñ arreglo 
    let opcion = opciones[random];

    document.querySelector('.result').innerHTML = opcion;
}