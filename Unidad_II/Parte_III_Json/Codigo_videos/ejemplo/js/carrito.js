"use  strict";

document.addEventListener("DOMContentLoaded", startPage);

function startPage(){
    const d = document;
    let listado = [
        // {
        //     producto: "Harina",
        //     cantidad: 1,
        // },
        // {
        //     producto: "Huevos",
        //     cantidad: 3,
        // }
    ];
    
    d.querySelector("#btn-compra1").addEventListener("click", compra1);
    d.querySelector("#btn-compra2").addEventListener("click", compra2);
    d.querySelector("#btn-compra3").addEventListener("click", compra3);

    function compra1(){
        let producto = d.querySelector("#producto").value;
        let item = {
            producto: producto,
            cantidad: 1,
        }
        listado.push(item);
        viewList();
    }

    function compra2(){
        let producto = d.querySelector("#producto").value;
        let item = {
            producto: producto,
            cantidad: 2,
        }
        listado.push(item);
        viewList();
    }

    function compra3(){
        let producto = d.querySelector("#producto").value;
        let item = {
            producto: producto,
            cantidad: 3,
        }
        listado.push(item);
        viewList();
    }

    function viewList(){
        console.table(listado);
        let divListado = d.querySelector(".listado");
        divListado.innerHTML = '';

        for (const iterator of listado) {
            divListado.innerHTML += `<div> ${iterator.cantidad} ${iterator.producto} </div>`;
        }
    }
}