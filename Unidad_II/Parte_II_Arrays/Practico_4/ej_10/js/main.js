/*10.Hacer un formulario que permita agregar comentarios debajo de una noticia 
(sin guardarlos o enviarlos al servidor).  Aplicarle a los comentarios un estilo
particular de manera que los diferencie del contenido de la noticia. 
Los comentarios se tienen que poder borrar individualmente mediante algún botón 
en cada uno. (Ejercicio tipo TPE).*/

"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;

    let comments = [];

    let input = d.querySelector(".comment");
    let btnAdd = d.querySelector(".btn");
    
    btnAdd.addEventListener("click", (e) => {
        addComments();
    });

    function addComments(){
        let comment = input.value;
        
        if(comment && comment !== ""){
            comments.push(comment);
        }

        console.log(comments);
        
        mostrar();
        input.value = "";
    }

    function mostrar(){
        let ul = d.querySelector(".ul-comment");
        ul.innerHTML = "";
        
        for(let i = 0; i < comments.length; i++){  
            let li = d.createElement("li");
            li.classList.add("font");
            li.innerHTML = comments[i];

           let btnDelete = d.createElement("button");
            btnDelete.innerText = "Delete";

            btnDelete.addEventListener("click", (e) => {
                deleteComment(i);
                console.log(comments);  
            });

            li.appendChild(btnDelete);
            ul.appendChild(li);
        } 
    }

    function deleteComment(i){
        comments.splice(i, 1);
        mostrar();
    }
}