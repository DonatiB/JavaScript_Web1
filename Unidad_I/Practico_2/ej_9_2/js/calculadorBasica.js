/*9.Implementar una calculadora que permita ingresar dos operandos mediante 
dos inputs y permita realizar las operaciones básicas (suma, resta, división, multiplicación) 
elegidas desde una lista desplegable (select).*/

"use strcit";

const d = document;
let calcular = d.querySelector("#calcular").addEventListener("click", realizarOperaciones);

function realizarOperaciones(e){
    e.preventDefault();
    let nro1 = d.querySelector("#operador1");
    let nro2 = d.querySelector("#operador2");
    let res = d.querySelector(".mostrar-res");

    operador1 = nro1.value;
    operador2 = nro2.value;

    op1 = parseFloat(operador1);
    op2 = parseFloat(operador2);

    let operacion = d.querySelector("#operacion");
    
    switch(operacion.value){
        case "suma":
            res.innerHTML = sumar(op1, op2);
        break;
        case "resta":
            res.innerHTML = restar(op1, op2);
        break;
        case "multiplicacion":
            res.innerHTML = multiplicar(op1, op2);
        break;
        case "division":
            res.innerHTML = dividir(op1, op2);
        break;
    }

    nro1.value = "";
    nro2.value = "";
}

function sumar(op1, op2){
    let res = op1 + op2;
    return res;
}


function restar(op1, op2){
    let res = op1 - op2;
    return res;
}


function multiplicar(op1, op2){
    let res = op1 * op2;
    return res; 
}


function dividir(op1, op2){
    let res = op1 / op2;
    return res;
}