const d = document;

let inputTiempo = d.querySelector("#tiempo");
let div = d.querySelector(".cuenta-regresiva");
let btnActivar = d.querySelector(".btn-activar");
btnActivar.addEventListener("click", iniciar);

function iniciar(){
    alert("corra, se iniciara la cuenta regresiva de 5 segundos");
    setTimeout(iniciarCuentaRegresiva, 5000)
}

function iniciarCuentaRegresiva(){
    let valorActual = inputTiempo.value;
    let intervalo = setInterval(() => {
        div.innerHTML = valorActual;
        if(valorActual === 0){
            clearInterval(intervalo);
            div.innerHTML = "BOOOOOM";
        }
        valorActual--;
 
 
    }, 1000);
}