/* 2. Escribir un HTML con tres divs vacíos (sin contenido) y llenarlo con un texto desde Javascript al cargar la pagina. Reflexione entre las diferencias en hacerlo en HTML o en Javascript. 
¿Es posible desde JS insertar diferentes párrafos adentro del div?
*/ 

let div_1 = document.getElementById("1");
div_1.innerHTML = "texto 1";

let div_2 = document.getElementById("2")
div_2.innerHTML = "texto 2";

let div_3 = document.getElementById("3")
div_3.innerHTML = "texto 3";


// a.desde JS insertar diferentes párrafos adentro del div

//tomamos el div
let div_4 = document.getElementById("4")
//creamos los parrafos
let parrafo_1 = document.createElement("p");
let parrafo_2 = document.createElement("p");
//los insertamos en el div
div_4.appendChild(parrafo_1);
div_4.appendChild(parrafo_2);
//les agregamos el texto
parrafo_1.innerText = "Parrafo 1 insertado";
parrafo_2.innerText = "Parrafo 2 insertado";
