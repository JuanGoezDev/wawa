/*
This method change the section and has 2 parameters:
    pageOut: The section ID that you go out
    pageIn: The section ID that you go in 
*/
function page(pageOut1, pageOut2, pageIn) {
    if(document.getElementById(pageOut1).className != "ocultar"){
        document.getElementById(pageOut1).className += " ocultar";
    }
    if(document.getElementById(pageOut2).className != "ocultar"){
        document.getElementById(pageOut2).className += " ocultar";
    }
    //cambio de color del fondo al moverse entre vistas, eliminar este codigo despues de las evidencias
    if(pageIn == "cursos"){
        document.getElementById("div_container").style.backgroundColor = "#E5E5E5";
    }

    if(pageIn == "articulos"){
        document.getElementById("div_container").style.backgroundColor = "black";
    }
    if(pageIn == "juego"){
        document.getElementById("div_container").style.backgroundColor = "red";
    }
    //Eliminar hasta acá
    document.getElementById(pageIn).classList.remove("ocultar");
    window.scroll(0, document.getElementById(pageIn).scrollTop);
}

function pageVideos(pageOut1,pageOut2,pageOut3, pageIn) {
    if(document.getElementById(pageOut1).className != "ocultar"){
        document.getElementById(pageOut1).className += " ocultar";
    }
    if(document.getElementById(pageOut2).className != "ocultar"){
        document.getElementById(pageOut2).className += " ocultar";
    }
    if(document.getElementById(pageOut3).className != "ocultar"){
        document.getElementById(pageOut3).className += " ocultar";
    }

    document.getElementById(pageIn).classList.remove("ocultar");
    window.scroll(0, document.getElementById(pageIn).scrollTop);
}