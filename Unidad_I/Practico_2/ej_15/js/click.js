/*15.Extender el ejercicio 10 para que se puedan elegir con distintos botones distintos 
estilos de diseño de nuestra tarjeta personal.*/

let div = document.getElementById("div").addEventListener("click", crearDiv);

function crearDiv(){
    let div = document.querySelector(".div");
    let divClick = document.createElement("div");
    div.appendChild(divClick);
    divClick.classList.add("div-click");
}