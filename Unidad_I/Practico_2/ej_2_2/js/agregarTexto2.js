/* 2. Escribir un HTML con tres divs vacíos (sin contenido) y llenarlo con un texto desde Javascript al cargar la pagina. Reflexione entre las diferencias en hacerlo en HTML o en Javascript. 
¿Es posible desde JS insertar diferentes párrafos adentro del div?
*/ 

let div = document.querySelectorAll("div");
div.forEach(e => {
    e.innerHTML = "Textos"; 
});
