var imagen = document.querySelector("img");

function agregarBorde () {
    if (imagen.style.border == "") {
        imagen.style.border = "2px solid red";
    } else {
        imagen.style.border = "";
    }
}