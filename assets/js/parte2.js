var inputGit = document.getElementById("cantidadGit");
var inputSlack = document.getElementById("cantidadSlack");
var inputGitHub = document.getElementById("cantidadGitHub");

var spanCantidadTotal = document.getElementById("cantidadTotal");

function cantidadTotalStickers(){
    var cantidadTotalGit = Number(inputGit.value);
    var cantidadTotalSlack = Number(inputSlack.value);
    var cantidadTotalGitHub = Number(inputGitHub.value);

    var cantidadTotal = cantidadTotalGit + cantidadTotalSlack + cantidadTotalGitHub;

    if (cantidadTotal <= 10) {
        spanCantidadTotal.innerHTML = cantidadTotal;
    } else {
        spanCantidadTotal.innerHTML = "demasiados";
    }
}