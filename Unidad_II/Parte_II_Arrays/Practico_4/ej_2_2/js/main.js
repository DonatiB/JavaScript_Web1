/*2.Cree un contador que cuente de manera independiente los clicks que se van haciendo 
sobre tres botones.*/

"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    initializationCode();

    function initializationCode(){
        const d = document;

        let btn1 = d.createElement("button");
        btn1.innerText = "btn-1";
        d.body.appendChild(btn1);

        let btn2 = d.createElement("button");
        btn2.innerText = "btn-2";
        d.body.appendChild(btn2);

        let btn3 = d.createElement("button");
        btn3.innerText = "btn-3";
        d.body.appendChild(btn3);

        let divBtn1 = d.createElement("div");
        d.body.appendChild(divBtn1);

        let divBtn2 = d.createElement("div");
        d.body.appendChild(divBtn2);

        let divBtn3 = d.createElement("div");
        d.body.appendChild(divBtn3);

        let counter = 0;
        let arrayCounter = [0, 0, 0];

        btn1.addEventListener("click", (e => {
            let i = 0;
            accountant(counter, divBtn1, arrayCounter, i); 
        }));
        btn2.addEventListener("click", (e => {
            let i = 1;
            accountant(counter, divBtn2, arrayCounter, i); 
        }));
        btn3.addEventListener("click", (e => {
            let i = 2;
            accountant(counter, divBtn3, arrayCounter, i);
        }));
    }

    function accountant(counter, div, arrayCounter, i){
        div.innerHTML = arrayCounter[i];
        counter  = arrayCounter[i];
        counter++;
        arrayCounter[i] = counter++;;
        div.innerHTML = arrayCounter[i];
    }
}