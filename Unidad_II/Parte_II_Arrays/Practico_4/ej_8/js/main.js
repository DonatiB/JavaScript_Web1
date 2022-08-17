/*8.Cree un calculador de notas finales de un alumno. El sistema debe permitir 
ingresar las notas desde un input de texto (una por una, sin límites) y 
mediante otro botón se debe informar el promedio del alumno.*/

"use strict";

document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina(){

    let input = document.querySelector(".nota");
    let btnNota = document.querySelector(".btn-nota");  
    let btnCalcular = document.querySelector(".btn-calcular");  
    let div = document.querySelector(".promedio");

    let notas = [];
    
    btnNota.addEventListener("click", (e) =>{
        let nota = input.value;
        let notaNum = parseInt(nota);

        if(input.value !== "" && notaNum){
            notas.push(notaNum);
        }
       
        mostrar();
        input.value = "";

        console.log(notas);
    });

    
    btnCalcular.addEventListener("click", (e) =>{
        let promedio = calcularConReduce();
        console.log(promedio + "promedio");
        div.innerHTML = promedio;
    });
   
    //ambas funciones de calcular son lo mismo
    function calcularConReduce(){
        let suma = notas.reduce((acumulador, numeroActual) => (acumulador += numeroActual, acumulador), 0);
        let promedio = suma / notas.length;
        return promedio;
    }

    //ambas funciones de calcular son lo mismo
    function calcular(){
        let suma = 0;
        let promedio = 0;
        let acumulador = 0;
        let numeroActual = 0;

        for (let i = 0; i < notas.length; i++) {
            numeroActual = notas[i];
            // suma = acumulador += numeroActual;
            suma = acumulador = acumulador + numeroActual;
        }

        console.log(suma + "suma");
        promedio = suma / notas.length;
        return promedio;
    }

    function mostrar(){
        let ul = document.querySelector(".ul-notas");
        ul.innerHTML = "";

        for (let i = 0; i < notas.length; i++) {
           ul.innerHTML += `<li> ${notas[i]} </li>`;
        }
    }
}