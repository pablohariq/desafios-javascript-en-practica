const form = document.getElementById("formulario");

const espacioResultado = document.querySelector(".resultado")

const espacioErrorNombre = document.querySelector(".errorNombre");
const espacioErrorAsunto = document.querySelector(".errorAsunto");
const espacioErrorMensaje = document.querySelector(".errorMensaje");

const mensajeAprobacion = "¡El mensaje se ha enviado con éxito!"
const mensajeError = "La información ingresada no es válida."

// creamos la función que verifica un campo de texto
// esta función recibirá un string correspondiente al contenido del campo
// y verificará si cumple las condiciones requeridas usando expresiones regulares
// retornando un boolean
const verificar = function(texto) {
    let aprobado = /[a-zA-Z]/gm.test(texto);
    return aprobado
}

// esta función borra el campo de error correspondiente. Es para ser usada cuando se corrija uno solo de los campos
// que ya tenga un mensaje de error
const borrarCampo = function(campo){
    campo.innerHTML = "";
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    // verificar para el campo nombre al hacer submit
    let formNombre = document.getElementById("nombre");
    verificar(formNombre.value)
        ? borrarCampo(espacioErrorNombre)
        : espacioErrorNombre.innerHTML = mensajeError

    // verificar para el campo asunto
    let formAsunto = document.getElementById("asunto");
    verificar(formAsunto.value)
        ? borrarCampo(espacioErrorAsunto)
        : espacioErrorAsunto.innerHTML = mensajeError

    // verificar para el campo asunto
    let formMensaje = document.getElementById("mensaje");
    verificar(formMensaje.value)
        ? borrarCampo(espacioErrorMensaje)
        : espacioErrorMensaje.innerHTML = mensajeError
    
    if (verificar(formNombre.value) && verificar(formAsunto.value) && verificar(formMensaje.value)){ 
        espacioResultado.innerHTML = mensajeAprobacion;
    }
    else{
        e.preventDefault();
    }
})

