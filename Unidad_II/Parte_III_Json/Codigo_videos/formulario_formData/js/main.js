"use strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;

    let form = d.querySelector("#form");
    form.addEventListener("submit", enviar);

    function enviar(e){
        e.preventDefault();

        //agarrar todos lo datos del form
        let formData = new FormData(form);

        let nombre = formData.get('nombre');
        let email = formData.get('email');
        let password = formData.get('password');
    
        console.log(nombre, email, password);
    }
    
}