"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){

    function processText(t) {
        let container = document.querySelector("#use-ajax");
        //agrego al DOM
        container.innerHTML = t;
        //esta t es el texto que trae la llamada ajax
        console.log(t);
        //busco sobre lo que agregué y agrego evento
        container.querySelectorAll(".js-comportamiento")
                  .forEach(b=> b.addEventListener("click", loadClick));
      }
      
      function loadClick(event)
      {
        event.preventDefault();
        console.log("Loading...");
        document.querySelector("#use-ajax").innerHTML = "<h1>Loading...</h1>";
        fetch("https://web-unicen.herokuapp.com/api/html?").then( function(response){
            if (response.ok) {
              console.log("ok");  
              console.log(response);  
              response.text().then(processText);
            }
            else
              document.querySelector("#use-ajax").innerHTML = "<h1>Error - Failed URL!</h1>";
          })
          .catch(function(response){
            console.log(response);
            document.querySelector("#use-ajax").innerHTML = "<h1>Error - Conection Failed!</h1>";
          });
      }
      
      let jsloads = document.querySelectorAll(".js-load");
      jsloads.forEach(e=> e.addEventListener("click", loadClick));
      
}