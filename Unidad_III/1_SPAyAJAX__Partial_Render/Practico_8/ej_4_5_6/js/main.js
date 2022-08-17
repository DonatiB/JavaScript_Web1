/*4.Implementar una portada de un sitio que mediante un botón cargue el contenido html 
mediante ajax ubicado en un servidor remoto bajo la URL http://web-unicen.herokuapp.com/api/html 

5.Asigne un comportamiento al botón interno que trae en el HTML del ejercicio anterior, 
para que cuando se haga click muestre un alert. Verifique si el botón existe en el DOM y 
efectivamente funciona. En caso que no funcione ¿cómo lo solucionaría? 

6.Agregar, al caso anterior,  otros botones pero que permitan cargar el mismo contenido en 
diferentes lugares de la página. Verifique que los botones internos todavía funcionan. 
Es posible que cuando clickee en un botón se disparen dos o más alerts  
¿A que se debe esto si le sucedió? ¿Cómo se soluciona?
*/

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    "use strict";

    async function cargarHtml(e, i){
        e.preventDefault();
        let url = "http://web-unicen.herokuapp.com/api/html";

        let containers =  d.querySelectorAll(".contenedor");
        for (let j = 0; j < containers.length; j++) {
            if(j===i){
                containers[j].innerHTML = "<h1> Loading... </h1>";
            }
        }
        let container = containers[i];
        try{
            let response =  await fetch (url);
            if(response.ok){
                let t = await response.text()
                processText(t, container, i);    
            }
            else{
                container.innerHTML =  `<h1> Error! Failed URL! </h1>`;      
            }
        }
        catch(error){
            container.innerHTML = "<h1> Connection error </h1>";
        }
    }
    
    function processText(t, container, i){
        container.innerHTML = t;
        container.querySelector(".js-comportamiento").addEventListener("click", (e) => {
            alert(`Button ${i + 1} click`);
        })   
    }
    
    const d = document;
    let btns = d.querySelectorAll(".btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", e => {
            cargarHtml(e, i);
        });
    }
}



