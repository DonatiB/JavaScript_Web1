/*12.Hacer una ruleta básica donde salga un número al azar entre 0 y 36. 
El usuario debe apostar por un único número mediante un input. Luego de pulsar “Jugar!” 
debe mostrar el número que salió, el número apostado y si ganó o perdió.*/

"use strict";

const d = document;
let btn = d.querySelector(".jugar").addEventListener("click", jugar);

function jugar(e){
    e.preventDefault();

    let mostrarRandom = d.querySelector(".numAzar");
    let mostrartNum = d.querySelector(".num");
    let resultado = d.querySelector(".resultado");

    let numUsuario = d.querySelector("#num");
    let num = parseInt(numUsuario.value);

    let random =  Math.floor((Math.random()* 36) + 1);

    let valor = isEqual(random, num);
    
    if(valor === true){
        mostrarRandom.innerHTML = random;
        mostrartNum.innerHTML = num;
        resultado.innerHTML = "Ganaste";
    }else{
        mostrarRandom.innerHTML = random;
        mostrartNum.innerHTML = num;
        resultado.innerHTML = "Perdiste";
    }

}

function isEqual(num1, num2){
    let resultado;
    if(num1 === num2){
        resultado = true;
    }else{
        resultado = false;
    }
    return resultado;
}