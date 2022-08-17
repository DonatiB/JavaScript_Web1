"use strcit";

document.querySelector("#incrementar").addEventListener("click", incrementarUno);
document.querySelector("#decrementar").addEventListener("click", decrementarUno);
document.querySelector("#btn-agregar").addEventListener("click", incrementarManual);

//almaceno la cantidad de pasos diarios
let totalPasos = 0;

function incrementarUno(){
    //totalPasos = totalPasos + 1
    totalPasos += 1;

    //actualizo el html
    document.querySelector(".pasos").innerHTML = totalPasos; 
}

function decrementarUno(){
    //totalPasos = totalPasos - 1
    totalPasos -= 1;

    //actualizo el html
    document.querySelector(".pasos").innerHTML = totalPasos;
}   

function incrementarManual(){
    //pasos es un strign
    let pasos =  document.querySelector("#input-pasos").value;
    // convertimos la variable pasos a un numero, ya que todo lo que se obtiene de un input es string
    // y si queremos hacer una operacion matematica, al sumar con un string lo que hacemos es concatenar, no sumar
    // por eso hacemos la conversion
    totalPasos += Number(pasos);

    //actualizo el html
    document.querySelector(".pasos").innerHTML = totalPasos;
}   