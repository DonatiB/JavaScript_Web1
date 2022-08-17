/*14.Generar un script reutilizable que permita agrandar el tamaño de una imagen 
cuando posamos el mouse encima.*/

"use strict";

const d = document;
let img = d.querySelectorAll(".img");

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("mouseover", (e) => {
        img[i].classList.toggle("img-modified");
    });
}
