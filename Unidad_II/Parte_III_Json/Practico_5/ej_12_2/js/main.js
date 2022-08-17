/*12.Hacer  una galeria de imagenes que incluya varias imágenes en miniatura. 
Cuando se posa el mouse sobre cada  imagen en miniatura deberá marcarse con un recuadro 
y cuando sea cliqueada debe aumentar su tamaño para poder verla mejor.
Esta funcionalidad debe ser aplicable a cualquier imagen dentro de la galería.*/

"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;

    let images = d.querySelectorAll(".img");
    let containerImage = d.querySelector(".container-img");
    let imageContainer = d.querySelector(".img-show");  
    let copy = d.querySelector(".copy")
    let closeModal = d.querySelector(".bx.bx-x");
    let leftMove = d.querySelector(".bx.bx-left-arrow-alt");
    let rightMove = d.querySelector(".bx.bx-right-arrow-alt");


    images.forEach(image =>{
        image.addEventListener("click", (e)=> {
            addImage(image.getAttribute('src'), image.getAttribute('alt'));
        });
    });

    let addImage = (src, alt) => {
        containerImage.classList.toggle("move");
        imageContainer.classList.toggle("show");
        imageContainer.src = src;
        copy.innerHTML = alt;
    }

    closeModal.addEventListener("click", (e) => {
        containerImage.classList.toggle("move");
        imageContainer.classList.toggle("show");
    });

    rightMove.addEventListener("click", (e) => {
        changeImg(1)
    });
    leftMove.addEventListener("click", (e) => {
        changeImg(-1)
    });

    let position = 0;
    function changeImg(nextPosition){
        position += nextPosition;

        if(position === -1){
            position = 0;
        }else if(position === images.length){
            position = images.length-1;
        }

        if(position < images.length && position > -1){
            let nameImg = images[position].src;
            imageContainer.src = nameImg;
            console.log(nameImg);
        }
       
        console.log(position);
    }
}