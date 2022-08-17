/*7.Cree una galería de imágenes. La misma debe tener botones de anterior y 
siguiente y mostrar las imágenes de forma cíclica*/
"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;
    let images = ["350z", "3000gt", "charger79", "civicTypeR", "corolla", "LancerEvolutionEvo", "mr2", "mx5", "nsx", "rx7","supraA70", "supramk4", "supraNagata"];
    let position = 0;
    
    initializationCode();

    function initializationCode(){  
        let img = d.createElement("img");
        img.src = `images/${images[position]}.jpg`;
        d.body.appendChild(img);

        let btnPrevious = d.createElement("button");
        btnPrevious.innerText = "Previous";
        d.body.appendChild(btnPrevious);

        let btnNext = d.createElement("button");
        btnNext.innerText = "Next";
        d.body.appendChild(btnNext);

        btnPrevious.addEventListener("click", (e) =>{
            changeImg(img, -1);
        });
        btnNext.addEventListener("click", (e) =>{
            changeImg(img, +1);
        });
    }

    function changeImg(img, nextPosition){
        position += nextPosition;

        if(position === -1){
            position = 0;
        }else if(position === images.length){
            position = images.length-1;
        }

        if(position < images.length && position > -1){
            let nameImg = images[position];
            img.src = `images/${nameImg}.jpg`;
            console.log(nameImg);
        }
       
        console.log(position);
    }
}