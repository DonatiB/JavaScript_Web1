/* 3. Mostrar el mismo mensaje del punto uno, pero haciendo click desde un botón

Muestre una alerta al cargar una página:
-Que sea un texto fijo
-Que sean dos variables nombre y apellido concatenadas, mostrando en el mensaje: Nombre: (valor_nombre)  Apellido: (valor_apellido)

*/

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

let btn = document.querySelector(".btn").addEventListener("click", (e) => {
    alert("Nombre: " + nombre + ". Apellido:" + apellido);
})

