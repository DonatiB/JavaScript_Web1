/*7.SPA (Single Page Application) Diseñar y desarrollar localmente un sitio SPA simple 
con las siguientes características:
-Header, navbar, contenedor principal (vacio)  y footer
-Barra de navegación con tres secciones
-Tres secciones que se carguen mediante partial render dentro del contenedor principal.
Por defecto debe cargarse el contenido que se quiere ver en un inicio.*/

//Ejercise doesn't finish

document.addEventListener("DOMContentLoaded", pag);

function pag(){
    "use strict";

    const d = document;
    let url = "https://www.google.com/maps/search/paginas+para+practicar+partial+render/@-37.3218263,-59.125,13.5z";

    async function cargarHtml(id){
        e.preventDefault();

        let section = d.querySelector(".sect-1");
        section.innerHTML = `<h2> Loading </h2>`;

        try{
            let response = await fetch(url);
            if(response.ok){
                let text = await response.text();
                section.innerHTML = text;
            }
            else{
                section.innerHTML = `<h2> Error - Failed URL! </h2>`;
            }
        
        }
        catch(error){
            section.innerHTML = `<h2> Connection error </h2>`;
        }
        
    }

    //
    function push(e){
        //del target (de lo que seleccionamos "section-1" por ej.) dame el id
        let id = e.target.id;

        //seleccionamos la seccion con ese id y le agregamos la clase
        selectNav(id);

        //cambiamos el nombre del tab de window (la ventana);
        document.title = id;

        cargarHtml(id);
    }

    function selectNav(id){
        //primero le removemos la clase a todos los li
        d
        .querySelectorAll(".navs")
        .forEach(e => e.classList.remove("selected"));
        //y despues se la agregamos al li con ese id
        d
        .querySelectorAll("#"+ id)
        .forEach(e => e.classList.add("selected"));
    }

    //cuando la pagina se carga
    window.onload = e => {
        //y este en "window / section N° se haga cargar(e)"
        window["section-1"].addEventListener("click", e => push(e));
        window["section-2"].addEventListener("click", e => push(e));
        window["section-3"].addEventListener("click", e => push(e));
        //window[section-1] -> buscamos el id de una forma mas fuerte

    }
    
    //cuando hagamos para atras o para adelante llamamdo al evento popstate
    window.addEventListener("popstate", e => {
        //agarramos el estado actual (el id actual (que puede ser section 1 2 o 3))
        let estadoId = e.state.id;
        console.log("Estado id ="+ estadoId);

        //seleccionamos el tab del id anterior/siguiente
        selectNav(estadoId);
        //cargamos el contenido del id anterior/siguiente
        cargarHtml(estadoId)
    })

    
}