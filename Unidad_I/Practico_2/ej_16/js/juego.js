/*16.Hacer un juego donde se pueda mostrar en una página una imagen de manera aleatoria y 
se debe adivinar a que se refiere la imagen. Pueden ser 5 imágenes de animales distintos y 
mediante un input el usuario debe ingresar el nombre del animal. Se debe mostrar si acertó o no.*/

let btn = document.getElementById("btn");
btn.addEventListener("click", jugar);
let btnReanudar = document.getElementById("btn-reanudar");
btnReanudar.addEventListener("click", reanudarJuego);
let input = document.getElementById("input");
let resultado = document.getElementById("resultado");

function jugar(){
    let contenedorImg = document.getElementById("contenedor-img");
    contenedorImg.innerHTML = "";
    resultado.innerText = "¿Acerte o Falle?"

    let imagenes = [
        {
            src: "./image/khan.jpg",
            alt: "tigre"
        },
        {
            src: "./image/leon.jpg",
            alt: "leon"
        },
        {
            src: "./image/lobo.jpg",
            alt: "lobo"
        },
        {
            src: "./image/rootweiler.jpg",
            alt: "perro"
        },
        {
            src: "./image/sable.jpg",
            alt: "dientes de sable"
        }
    ];

    let bufferImagenes = [];

    for (const i of imagenes) {
        let imagen = new Image();
        imagen.src = i.src;
        imagen.alt = i.alt;

        bufferImagenes.push(imagen);
    }

    let indiceImagenAleatoria = generarEnteroAleatorio(imagenes.length);
    let imagenAleatoria = bufferImagenes[indiceImagenAleatoria];

    let imgElement = document.body.appendChild(imagenAleatoria);
    contenedorImg.appendChild(imgElement);

    imgElement.classList.add("img-animal");

    if(input.value == ""){
        imgElement.classList.add("img-none");
        resultado.innerText = "Animal no ingresado"
    }else{
        if(imagenAleatoria.alt == input.value){
            resultado.innerText = "Acertaste";
        }else{
            resultado.innerText = "Fallaste";
        }
    }
}

function generarEnteroAleatorio(cantidadImagenes){
    return Math.floor(Math.random() * cantidadImagenes);
}

function reanudarJuego(){
    let contenedorImg = document.getElementById("contenedor-img");
    contenedorImg.innerHTML = "";
    resultado.innerText = "¿Acerte o Falle?";
    input.value = "";
}


