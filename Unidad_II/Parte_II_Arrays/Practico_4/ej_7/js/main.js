/*7.Cree una galería de imágenes. La misma debe tener botones de anterior y 
siguiente y mostrar las imágenes de forma cíclica*/

"use strict";
document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina(){
    const d = document;

    let imagenes = ["350z", "3000gt", "charger79", "civicTypeR", "corolla", "LancerEvolutionEvo", "mr2", "mx5", "nsx", "rx7","supraA70", "supramk4", "supraNagata"];
    let img = d.querySelector('.images');
    
    let posicion = 0;

    d.querySelector(".next").addEventListener("click", (e) =>{
        siguiente(+1);
    })

    d.querySelector(".previous").addEventListener("click", (e) =>{
        siguiente(-1);
    })

    function siguiente(siguienteP){
        posicion += siguienteP;

        if(posicion == imagenes.length){
            posicion = 12;
        }else if(posicion == -1){
            posicion = 0;
        }

        if(posicion < imagenes.length && posicion >= 0){
            let nameImg = imagenes[posicion];
            img.src = `images/${nameImg}.jpg`;
        }
        
        console.log(siguienteP);
        console.log(posicion);
    } 
}