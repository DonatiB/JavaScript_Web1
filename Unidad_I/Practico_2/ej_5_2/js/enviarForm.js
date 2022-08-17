/*5.Crear un formulario con Nombre, Apellido y un botón Enviar. Al presionar Enviar debe 
mostrar el nombre y apellido como un título dentro de la página. */

let nombre = document.querySelector(".nombre");
let apellido = document.querySelector(".apellido");
let title = document.querySelector(".title");

let btn = document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    title.innerHTML = nombre.value + " " + apellido.value;
});