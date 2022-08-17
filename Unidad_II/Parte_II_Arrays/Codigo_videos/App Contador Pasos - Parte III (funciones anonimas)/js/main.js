"use strcit";

document.querySelector("#incrementar").addEventListener("click", incrementarUno);
document.querySelector("#decrementar").addEventListener("click", decrementarUno);
document.querySelector("#btn-agregar").addEventListener("click", incrementarManual);

//almaceno la cantidad de pasos diarios
let totalPasos = 0;

function incrementarUno(){
    incrementar(+1);
}

function decrementarUno(){
    incrementar(-1);
}   

function incrementarManual(){
    //pasos es un strign
    let pasos =  document.querySelector("#input-pasos").value;
    //convierto pasos a number
    let pasosNumber = Number(pasos);

    incrementar(pasosNumber);
}   

function incrementar(pasos){
    totalPasos += pasos;

    //actualizo el html
    document.querySelector(".pasos").innerHTML = totalPasos; 
}