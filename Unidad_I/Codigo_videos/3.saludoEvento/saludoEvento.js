
function saludarCatedra(){
    let nombre = document.querySelector("#nombre").value;

    console.log("Hola Javier");
    console.log("Hola Nacho");
    console.log("Hola Mati");
    console.log("Hola Franco");
    console.log("Hola " + nombre);

    document.querySelector("#saludo").innerHTML = "Hola " + nombre;
}