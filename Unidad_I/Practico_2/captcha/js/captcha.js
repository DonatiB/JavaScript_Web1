"use strict";

const d = document;
let btnCaptcha = d.querySelector(".btn-captcha").addEventListener("click", generarCaptcha);
let input  = d.querySelector(".input");
let counter = d.querySelector(".counter");
let maxChar = d.querySelector(".maxChar");
let cantChar = 7;
maxChar.innerHTML = cantChar;

input.addEventListener("input", (e) => {
    if(input.value.length < cantChar){
        counter.innerText = input.value.length;
    }else{
        counter.innerText = "Max";
        input.value = input.value.substring(0, cantChar);
    }

    d.querySelector(".btn-comprobar").addEventListener("click", (e) => {
        compararCaptcha(e, input);
    });

})


function generarCaptcha(){
    let div = d.querySelector(".captcha");
    div.innerHTML = "";

    let arrayAbc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
    let cantChar = 7;

    for (let i = 0; i < cantChar; i++) {
        let randomAbc = Math.floor((Math.random() * arrayAbc.length - 1) + 1);
        div.innerHTML += arrayAbc[randomAbc];
    }
}


function compararCaptcha(e, input){
    e.preventDefault();

    let div = d.querySelector(".captcha");
    let resultado = d.querySelector("h4");
    console.log(div.innerHTML);
    console.log(input.value);
   

    if(div.innerHTML === input.value){
        resultado.innerHTML = "captcha valido";
        resultado.classList.remove("captcha-invalido");
        resultado.classList.add("captcha-valido");
    }else{
        resultado.innerHTML = "captcha invalido";
        resultado.classList.remove("captcha-valido");
        resultado.classList.add("captcha-invalido");
    }
}