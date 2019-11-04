/*
This method change the section and has 2 parameters:
    pageOut: The section ID that you go out
    pageIn: The section ID that you go in 
*/
function iniciarCerrarSesion(pageOut, pageIn) {
    if(document.getElementById(pageOut).className != "ocultar"){
        document.getElementById(pageOut).className += " ocultar";
    }    
    document.getElementById(pageIn).classList.remove("ocultar");
    window.scroll(0, document.getElementById(pageIn).scrollTop);
}

function inicioWawa(pageOut1, pageOut2, pageIn) {
    if(document.getElementById(pageOut1).className != "ocultar"){
        document.getElementById(pageOut1).className += " ocultar";
    }
    if(document.getElementById(pageOut2).className != "ocultar"){
        document.getElementById(pageOut2).className += " ocultar";
    }
    
    document.getElementById(pageIn).classList.remove("ocultar");
    window.scroll(0, document.getElementById(pageIn).scrollTop);
}

function page(pageOut1, pageOut2, pageOut3, pageIn) {
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

function navegacionCursos(pageOut1,pageOut2,pageOut3,pageOut4,pageOut5, pageIn) {
    if(document.getElementById(pageOut1).className != "ocultar"){
        document.getElementById(pageOut1).className += " ocultar";
    }
    if(document.getElementById(pageOut2).className != "ocultar"){
        document.getElementById(pageOut2).className += " ocultar";
    }
    if(document.getElementById(pageOut3).className != "ocultar"){
        document.getElementById(pageOut3).className += " ocultar";
    }
    if(document.getElementById(pageOut4).className != "ocultar"){
        document.getElementById(pageOut4).className += " ocultar";
    }
    if(document.getElementById(pageOut5).className != "ocultar"){
        document.getElementById(pageOut5).className += " ocultar";
    }

    document.getElementById(pageIn).classList.remove("ocultar");
    window.scroll(0, document.getElementById(pageIn).scrollTop);
}