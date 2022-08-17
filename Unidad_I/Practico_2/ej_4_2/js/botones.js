/*4.Crear un html con 3 botones de distinto color. Agregar 
la funcionalidad para que se muestre en un párrafo un mensaje que 
avise cuál de los botones fue el último cliqueado.
*/

let btns = document.querySelectorAll("button");
let p = document.querySelector(".p-btncolor");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
        p.innerHTML = btns[i].innerHTML;
    });
}    

