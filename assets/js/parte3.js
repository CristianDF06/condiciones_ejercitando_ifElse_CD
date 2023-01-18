var pass1 = document.getElementById("pin1");
var pass2 = document.getElementById("pin2");
var pass3 = document.getElementById("pin3");

var passwordIngresado = document.getElementById("confirmarPassword");

function validarPassword (){
    var pin1 = pass1.value;
    var pin2 = pass2.value;
    var pin3 = pass3.value;

    var password = pin1 + pin2 + pin3;

    if (password == "911") {
        passwordIngresado.innerHTML = "Password 1 correcto."
    } else if(password == "714" ){
        passwordIngresado.innerHTML = "Password 2 correcto."
    }else{
        passwordIngresado.innerHTML = "El password ingresado no es correcto."
    }
}