/*16.Hacer un juego donde se pueda mostrar en una página una imagen de manera aleatoria y 
se debe adivinar a que se refiere la imagen. Pueden ser 5 imágenes de animales distintos y 
mediante un input el usuario debe ingresar el nombre del animal. Se debe mostrar si acertó o no.*/

"use strict";

const d = document;

let btn = d.querySelector(".btn").addEventListener("click", adivinar);

function adivinar(e){
    e.preventDefault();

    let imgs = d.querySelectorAll(".img");
    let input = d.querySelector("#animal");
    let div = d.querySelector(".div");
    let animal = input.value;
    console.log(animal);

    let random = Math.floor((Math.random() * 6) + 1);
    console.log(random);

    for (let i = 0; i < imgs.length; i++) {
        if(random === i){  
            let image = imgs[i].name;
            if(animal == image){
                imgs[i].classList.add("img-display");   
                div.innerHTML = "Acertaste";
            }else{
                div.innerHTML = "No acertaste";
                imgs.forEach(e => {
                    e.classList.remove("img-display");
                }); 
            }     
        }
    }
    input.value = "";
}