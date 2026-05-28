document.addEventListener("DOMContentLoaded", () => {

    window.mostrarSeccion = function(seccion) {
        const home = document.getElementById("home");
        const quiz = document.getElementById("quiz");

        home.classList.add("ocultar");
        quiz.classList.add("ocultar");

        document.getElementById(seccion).classList.remove("ocultar");
    }
   
   document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();

    //Pregunta 1.
    const preguntaUno = document.getElementById("pregunta_1").value.toLowerCase();
    //Preunta 2.
    const preguntaDos = document.getElementById("pregunta_2").value;
    //Pregunta 3.
    const preguntaTres = document.getElementById("tercer_dia").checked;

    let puntaje = 0;

    if (preguntaUno === "" || preguntaDos === "select"){
        resultado.innerHTML = "Aviso: Responde todas las preguntas antes de enviar. Intentalo de nuevo :C"

        return;
    }
    
    if(preguntaUno === "belen" || preguntaUno === "belén"){
        puntaje ++;
    }

    if(preguntaDos === "Juan"){
        puntaje ++;
    }

    if(preguntaTres){
        puntaje++;
    }

    document.getElementById("resultado").innerHTML = "Tu <b> puntaje </b> fue: " + puntaje + "/3";
   });
});