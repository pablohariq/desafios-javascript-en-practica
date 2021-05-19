const caja = document.getElementById("caja"); //la caja objetivo

const botones = document.getElementsByTagName("button");

// opcion elegante: usando una iteración
// botones.forEach(boton => {
//     boton.addEventListener("click", e=>{
//         var colorEscogido = boton.style.backgroundColor;
//         caja.style.backgroundColor = colorEscogido;
//     })
// });

// opción bruta
botones[0].addEventListener("click", (e)=>{
    var colorEscogido = botones[0].style.backgroundColor;
    caja.style.backgroundColor = colorEscogido;
})

botones[1].addEventListener("click", (e)=>{
    var colorEscogido = botones[1].style.backgroundColor;
    caja.style.backgroundColor = colorEscogido;
})

botones[2].addEventListener("click", (e)=>{
    var colorEscogido = botones[2].style.backgroundColor;
    caja.style.backgroundColor = colorEscogido;
})

botones[3].addEventListener("click", (e)=>{
    var colorEscogido = botones[3].style.backgroundColor;
    caja.style.backgroundColor = colorEscogido;
})

botones[4].addEventListener("click", (e)=>{
    var colorEscogido = botones[4].style.backgroundColor;
    caja.style.backgroundColor = colorEscogido;
})

botones[5].addEventListener("click", (e)=>{
    var colorEscogido = botones[5].style.backgroundColor;
    caja.style.backgroundColor = colorEscogido;
})

//aprendizajes:
//con elemento.style.(propiedad) se puede acceder a las propiedades de estilo con una sintaxis un poco diferente (backroundColor en vez de background-color)
//esto solo vale para propiedades inline que hayan sido declaradas en el documento html