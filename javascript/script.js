"use strict"

document.addEventListener("DOMContentLoaded", function () {
    const enviarBtn = document.getElementById("enviar");

    enviarBtn.addEventListener("click", function () {
        
        const genero = document.querySelector(".pregunta1-formulario").value;
        const cisgenero = document.querySelector(".pregunta2-formulario").value;
        const atraccion = document.querySelector(".pregunta3-formulario").value;
        const identidadGenero = document.querySelector(".pregunta4-formulario").value;
        const pronombre = document.querySelector(".pregunta5-formulario").value;

        
        if (!genero || !cisgenero || !atraccion || !identidadGenero || !pronombre) {
            alert("Por favor, responde todas las preguntas antes de enviar.");
            return;
        }

        
        let identidadSexual = "No se pudo determinar";

        if (genero === "1" && atraccion === "1") {
            identidadSexual = "Heterosexual masculino";
        } else if (genero === "2" && atraccion === "1") {
            identidadSexual = "Heterosexual femenino";
        } else if ((genero === "1" && atraccion === "2") || (genero === "2" && atraccion === "2")) {
            identidadSexual = "Homosexual";
        } else if (atraccion === "3") {
            identidadSexual = "Bisexual o Pansexual";
        } else if (atraccion === "4") {
            identidadSexual = "Asexual";
        }

        
        alert(`Tu identidad sexual es: ${identidadSexual}`);
        console.log(`Identidad sexual determinada: ${identidadSexual}`);
    });
});




