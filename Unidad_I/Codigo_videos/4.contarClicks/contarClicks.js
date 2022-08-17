let contador = 0;

function contarClick(){
    //contador = contador + 1;
    contador++;

    document.querySelector("#cuenta").innerHTML = contador;
    
    if(contador == 1){
        document.querySelector("#mensaje").innerHTML = "Se hizo " + contador + " click." ;
    }else{
        document.querySelector("#mensaje").innerHTML = "Se hicieron " + contador + " clicks." ;
    }
   
}