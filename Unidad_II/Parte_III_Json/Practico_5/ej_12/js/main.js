/*12.Hacer  una galeria de imagenes que incluya varias imágenes en miniatura. 
Cuando se posa el mouse sobre cada  imagen en miniatura deberá marcarse con un recuadro 
y cuando sea cliqueada debe aumentar su tamaño para poder verla mejor.
Esta funcionalidad debe ser aplicable a cualquier imagen dentro de la galería.*/

"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;

    // let images = ["350z", "3000gt", "charger79", "civicTypeR", "corolla", "LancerEvolutionEvo", "mr2", "mx5", "nsx", "rx7","supraA70", "supramk4", "supraNagata"];
    let images = d.querySelectorAll("#gallery");
    let imgActive = d.querySelector("#img-active");
    let indexImage = 0;

    let btnClose = d.querySelector("#btn-close");
    let btnPrevious = d.querySelector("#btn-previous");
    let btnNext = d.querySelector("#btn-next");
    

    //open lightbox
    let lightbox = d.querySelector(".main-conteiner");
    let openLightbox = (e) => {
        imgActive.src = e.target.src;
        lightbox.style.display = "flex";
        indexImage = Array.from(images).indexOf(e.target);
    };
    images.forEach((img)=>{
        img.addEventListener("click", openLightbox);
        console.log("click");
    });

    //Aplicamos el recuadro
    let imagenes = d.querySelectorAll("img");
    for(let i = 0; i < imagenes.length; i++){

        // Creamos el evento mouseover para cada imagen
        imagenes[i].addEventListener("mouseover", function(e){
            //le preguntamos si el lightbox esta abierto o no
            if(lightbox.style.display == "flex"){
                imagenes[i].classList.remove("imgMouseOver");
            }else{
                imagenes[i].classList.add("imgMouseOver");
            }
        });

        // Creamos el evento mouseout para cada imagen
        imagenes[i].addEventListener("mouseout", function(e){
            imagenes[i].classList.remove("imgMouseOver");
        });
    }

    //close lightbox
    btnClose.addEventListener("click", (e) =>{
        lightbox.style.display = "none";
    });



    //AUN NO LO PUDE HACER FUNCIONAR
    //next image
    let nextImg = () => {
        for(let i = 0; i < imagenes.length; i++){
            if(imgActive == imagenes[i]){
                indexImage = i;
                console.log(indexImage);
                console.log(imgActive);
                console.log(imagenes[i], i);

                imgActive.src = imagenes[i++].src;
                console.log(imagenes[i].src);
                console.log(indexImage++);
                indexImage++;
            }
        }
        
    };
    btnNext.addEventListener("click", nextImg);
}