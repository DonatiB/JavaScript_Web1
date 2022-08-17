"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    //sin async/await
    function loadClick(event) {
        event.preventDefault();
        let container = document.querySelector("#use-ajax");
        container.innerHTML = "<h1>Loading...</h1>";
        fetch(url).then(
          function (response) {
            if (response.ok) {
              response.text().then(t => container.innerHTML = t);
            }
            else
              container.innerHTML = "<h1>Error - Failed URL!</h1>";
        })
        .catch(function (response) {
        container.innerHTML = "<h1>Connection error</h1>";
        });
    }
    //con async/await
    async function load2(event) {
        event.preventDefault();
        let container = document.querySelector("#use-ajax");
        container.innerHTML = "<h1>Loading...</h1>";
        try {
          let response = await fetch(url);
          if (response.ok) {
            let t = await response.text()
            container.innerHTML = t;
          }
          else
            container.innerHTML = "<h1>Error - Failed URL!</h1>";
        }
        catch (error) {
          container.innerHTML = "<h1>Connection error</h1>";
        };
    }
}