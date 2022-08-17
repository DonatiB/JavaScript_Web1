document.getElementById("btn-prender").addEventListener("click", prender);
document.getElementById("btn-apagar").addEventListener("click", apagar);

//Lamamos a la funcion apagar para que cuando cargue la pagina aparezca pagada
apagar();

function prender(){
    //1.Cambiar la foto de la lampara
    document.getElementById("img-lampara").src = "images/lampara_on.png"
    //2.Cambiar el fondo de la pagina
    document.getElementById("fondo").classList.add("prendido");
    document.getElementById("fondo").classList.remove("apagado");
}

function apagar(){
    //1.Cambiar la foto de la lampara
    document.getElementById("img-lampara").src = "images/lampara_off.png"
    //2.Cambiar el fondo de la pagina
    document.getElementById("fondo").classList.add("apagado");
    document.getElementById("fondo").classList.remove("prendido");
}

