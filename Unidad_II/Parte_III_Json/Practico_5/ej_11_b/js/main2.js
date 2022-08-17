"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;

    let btn = d.querySelector(".btn");
    let parr = d.querySelectorAll("p");

    btn.addEventListener("click", (e) => {
        for (let i = 0; i < parr.length; i++) {   
            parr[i].classList.toggle("p2"); 
        }
    });
}