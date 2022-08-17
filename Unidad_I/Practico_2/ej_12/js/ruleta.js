/*12.Hacer una ruleta básica donde salga un número al azar entre 0 y 36. 
El usuario debe apostar por un único número mediante un input. Luego de pulsar “Jugar!” 
debe mostrar el número que salió, el número apostado y si ganó o perdió.*/

let btnJugar = document.getElementById("jugar").addEventListener("click", jugar);

function jugar(){

    let min = 0;
    let max = 36;

    let numJugador = document.getElementById("numJugador").value;
    console.log(numJugador);
    let numAleatorio = Math.round(Math.random() * (1 + max - min) + min);
    console.log(numAleatorio);

    let resultadoJugador = document.getElementById("numeroJugado");
    resultadoJugador.innerHTML = "El numero jugado es: " + numJugador;

    let resultadoAleatorio = document.getElementById("numeroAleatorio");
    resultadoAleatorio.innerHTML = "El numero aleatorio es: " + numAleatorio;

    
    if(numAleatorio != numJugador){
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "Perdiste";
        
    }else{
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "Ganaste";
    }

}








