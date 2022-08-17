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

    initializationCode();
    function initializationCode(){
        let h1 = d.createElement("h1");
        h1.innerHTML = "Noticia Title";
        d.body.appendChild(h1);

        let p = d.createElement("p");
        p.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi eum deleniti voluptate, minima quas expedita iure voluptas cum dolores debitis nam, odio in pariatur harum repudiandae, corrupti sint quia necessitatibus?";
        d.body.appendChild(p);

        let input = d.createElement("input");
        input.type = "text";
        input.placeholder = "Leave your comment";
        d.body.appendChild(input);

        let btn = d.createElement("button");
        btn.innerText = "Add Comment"
        d.body.appendChild(btn);

        btn.addEventListener("click", (e)=> {
            addComment(input);
        });
    }

    function addComment(input){
        let comment = input.value;

        if(comment && comment != ""){
            comments.push(comment);
        }

        console.log(comments);
        viewComments();
        input.value = "";
    }

    let ul = d.createElement("ul");
    d.body.appendChild(ul);

    function viewComments(){
        ul.innerHTML = "";

        for (let i = 0; i < comments.length; i++) {
            let li = d.createElement("li");
            li.className = "div";
            li.innerHTML = comments[i];

            let btnDelete = d.createElement("button");
            btnDelete.innerText = "Delete";

            btnDelete.addEventListener("click", (e) => {
                deleteComments(i);
            });

            li.appendChild(btnDelete);
            ul.appendChild(li);   
        }
    }

    function deleteComments(id){
        comments.splice(id, 1);
        viewComments();
        console.log(comments);
    }
}