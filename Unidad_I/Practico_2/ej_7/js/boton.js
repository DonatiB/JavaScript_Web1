/*7.Crear un botón que al hacer click cambie el color de fondo de un div y 
agregue borde de 3px rojo.*/

let btnModificar = document.getElementById("modificar-color").addEventListener("click", modificarColor);

function modificarColor(){
    let div = document.getElementById("div-fondo");
    div.classList.toggle("color");
}