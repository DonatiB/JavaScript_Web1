"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    function loadClick(event)
    {
        event.preventDefault();
        console.log("Loading...");
        document.querySelector("#use-ajax").innerHTML = "<h1>Loading...</h1>";
        fetch("https://web-unicen.herokuapp.com/api/html?").then( function(response){
            console.log("ok");  
            console.log(response);  
            response.text().then(t=> document.querySelector("#use-ajax").innerHTML = t);
            ;
        });
        
        
    }

    let jsloads = document.querySelectorAll(".js-load");
    jsloads.forEach(e=> e.addEventListener("click", loadClick));

}