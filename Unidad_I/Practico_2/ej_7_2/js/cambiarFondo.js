/*7.Crear un botón que al hacer click cambie el color de fondo de un div y 
agregue borde de 3px rojo.*/

const d = document;
let div = d.querySelector(".div");

let btn = d.querySelector(".cmbr-fondo").addEventListener("click", (e)=>{
    div.classList.toggle("div-modificado");
});