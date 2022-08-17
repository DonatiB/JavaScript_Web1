/*9.Implementar una calculadora que permita ingresar dos operandos mediante 
dos inputs y permita realizar las operaciones básicas (suma, resta, división, multiplicación) 
elegidas desde una lista desplegable (select).*/

let btnEnviar = document.getElementById("enviar").addEventListener("click", realizarOperacion);

function realizarOperacion(event){
    event.preventDefault();

    let operacion = document.getElementById("operacion");
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;

    num1 = parseFloat(numero1);
    num2 = parseFloat(numero2);

    if(operacion.value == "sumar"){
        resultado = num1 + num2;
    }else if(operacion.value == "restar"){
        resultado = num1 - num2;
    }else if(operacion.value == "multiplicar"){
        resultado = num1 * num2;
    }else if(operacion.value == "dividir"){
        resultado = num1 / num2;
    }

    let parrafo = document.getElementById("mostrar-resultado");
    parrafo.innerHTML = resultado;
}