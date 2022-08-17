/*9.Hacer una clase que al agregarla a un div, haga que cambie de color cada 0.5 segundos. 
De mínimo debe haber 5 colores.*/

"use strict";

document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina(){
    const d = document;

    let colors = ["blue", "red", "green", "brown", "black"];
    let i = 0;

    let div = d.querySelector(".div");

    div.addEventListener("click", (e) => {
        let timer = setInterval(() => {
            if(i < colors.length) {
                div.style.backgroundColor = (`${colors[i]}`);
                i++;   
            }else{
                clearInterval(timer);
            }
        }, 500);
    });


    //misma funcion creada de otro, sin ser funcion anonima

    // div.addEventListener("click", addClass);
    // function addClass(){ 
    //     let timer = setInterval(modified, 1000);
    //     console.log("dnetro de click")

    //     function modified(){
    //         console.log("dentro de modified")
    //         if(i < colors.length) {
    //             div.style.backgroundColor = (`${colors[i]}`);
    //             i++;   
    //             console.log("dentro del primer if")
    //         }else{
    //             clearInterval(timer);
    //             console.log("dentro del else")
    //         }
    //     }
    // }
}