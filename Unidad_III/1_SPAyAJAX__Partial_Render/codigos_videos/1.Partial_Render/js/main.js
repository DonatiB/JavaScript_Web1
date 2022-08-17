"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
        
    function loadClick(event) {
        event.preventDefault();
        fetch("https://web-unicen.herokuapp.com/api/html?")
            .then(response => {
                console.log(response);
                response.text().then(text => {
                    document.querySelector("#use-ajax").innerHTML = text
                });
            });
    }

    //Si la promesa no se cumple (la descarga)
    function loadClick(event) {
        event.preventDefault();
        fetch("https://web-unicen.herokuapp.com/api/html?")
            .then(response => {
                response.text().then(text => {
                    document.querySelector("#use-ajax").innerHTML = text
                });
            })
            .catch(error => {
                console.log(error);
                container.innerHTML = "<h1>Error - Connection Failed!</h1>";
            });
    }  

    //Y si la conexión anduvo pero el archivo no existe
    function loadClick(event) {
        event.preventDefault();
        let container = document.querySelector("#use-ajax");
        fetch("https://web-unicen.herokuapp.com/api/html?")
            .then(response => {
                if (response.ok) {
                    response.text().then(text => container.innerHTML = text);
                } else
                    container.innerHTML = "<h1>Error - Failed URL!</h1>";
            })
            .catch(error => {
                console.log(error);
                container.innerHTML = "<h1>Error - Connection Failed!</h1>";
            });
    }  
    
    let jsloads = document.querySelectorAll(".js-load");
    jsloads.forEach(e => e.addEventListener("click", loadClick));    
}


