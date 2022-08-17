/*14.Generar un script reutilizable que permita agrandar el tamaño de una imagen 
cuando posamos el mouse encima.*/

"use strict";

let imgSupraMax = document.getElementById("imgSupra");
imgSupraMax.addEventListener("mouseenter", maxTamañoImg);

let imgSupraMin = document.getElementById("imgSupra");
imgSupraMin.addEventListener("mouseleave", minTamañoImg);

function maxTamañoImg(){
    imgSupraMax.src = "img/supra.jpg";
    imgSupra.classList.remove("imageSupraorigin");
    imgSupra.classList.add("imageSupra");
}

function minTamañoImg(){
    imgSupra.src = "img/supra.jpg";
    imgSupra.classList.remove("imageSupra");
    imgSupra.classList.add("imageSupraorigin");
}



// let lampImg = document.querySelector("lamp");
// let lampImgAnterior = lampImg.src;
// lampImg.src = "foto.png";
