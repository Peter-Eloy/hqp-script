
// IT-talent oder Firma
function openForm(formName) {
    var i;
    var x = document.getElementsByClassName("form");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(formName).style.display = "block";
}

// Menu small button
function ShowMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    var y = document.getElementById("FromRight");
    if (y.id = "FromRight") {
        y.style = "float:left";
    } else {
        y.style = "float:right";
    }
}
