/*8.Cree un calculador de notas finales de un alumno. El sistema debe permitir 
ingresar las notas desde un input de texto (una por una, sin límites) y 
mediante otro botón se debe informar el promedio del alumno.*/

document.addEventListener("DOMContentLoaded", calculadorNotas);

function calculadorNotas(){
    "use strict";

    let notas = []
    const d = document;
    validarNumber();   

    d.querySelector("#btn-notas").addEventListener("click", e => { 
        e.preventDefault();  
        agregarNota();
    }); 
    d.querySelector("#btn-promedio").addEventListener("click", e => {  
        obtenerPromedio();
    });

    function validarNumber(){
        let input = d.querySelector("#input-nota");
        input.addEventListener("keypress", e => {
            e.preventDefault();

            let codigoKey = e.keyCode;
            let valorKey = String.fromCharCode(codigoKey);
            let valor = parseInt(valorKey);

            if(valor){
                input.value += valor;
            }

            return valor;
        })
    }

    function agregarNota(){
        let input = d.querySelector("#input-nota");
        let nota = parseInt(input.value);
        
        
        if(input.value !== ""){
            notas.push(nota);
        }
       
        mostrar();
        input.value = "";
    }

    function mostrar(){
        let ul = d.querySelector(".lista-notas");
        ul.innerHTML = "";

        notas.forEach(e => {
            ul.innerHTML += `<li> ${e} </li>`;
        });
    }

    function obtenerPromedio(){
        let suma = 0;

        notas.forEach(e => {
            suma = suma + e;
        });

        let promedio = suma / notas.length;
        mostrarPromedio(promedio);
    }

    function mostrarPromedio(promedio){
        let h3 = d.querySelector(".promedio");
        h3.innerHTML = "";

        h3.innerHTML = promedio;
        notas = [];
    }
}