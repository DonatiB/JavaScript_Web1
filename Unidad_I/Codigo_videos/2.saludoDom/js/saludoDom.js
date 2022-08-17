let nombre = prompt("Ingrese su nombre:");
console.log(nombre);

let edad = prompt("Ingrese su edad:");
console.log(edad);

let nodoParrafo = document.querySelector("#saludo");
nodoParrafo.innerHTML = "Hola " + nombre + " de " + edad + " años.";
