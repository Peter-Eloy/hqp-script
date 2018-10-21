/* alert("Javascript finded."); */

function hide(idVal){
    if((idVal !== undefined) && (idVal !== "")){
        try{
            var d = getId(idVal).parentElement;
            if((d !== undefined) && (d !== null)){
                var listEl = d.firstElementChild;
                while(listEl){
                    var attr = listEl.id;
                    getId(attr).style.display="none";
                    listEl = listEl.nextElementSibling;
                }
            }else{
                alert("Error in hide() code, getId(idVal).parentElement is:" + d);
            }		
        }catch (e) {
            alert("Error:\nin hide() code, getId(idVal).parentElement is: " + d + ", and error result is: " + e);
        }
    }else{
        alert("Error in def.js file, function -> hide() code, id is:" + idVal);
    }	
}

function show(id){
    hide(id);
    changeStyleById(id).display="block";
}

function formResetValues(action){
    if((action !== undefined) && (action !== "")){
        var a = document.getElementsByTagName("form").parentElement;
        if((a !== undefined) && a !== null){
            var r = a.firstElementChild;
            while(r){
                r.target.value = "";
                r = r.nextElementSibling;
            }
        }
    }
}


function ShowMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    var y = document.getElementById("FromRight");
    if (y.id === "FromRight") {
        y.style = "float:left";
    } else {
        y.style = "float:right";
    }
}




/* Menu Drop down */
function showmenu(elmnt){
    /* getId(elmnt).style.display="block"; */
    document.all(elmnt).style.visibility="visible";
}
function hidemenu(elmnt){
    /* getId(elmnt).style.display="none"; */
    document.all(elmnt).style.visibility="hidden";
}
/* End Menu Drop down */


function getId(id){
    return document.getElementById(id);
}

function changeStyleById(id){
    var el = getId(id);
    if(el){
        return el.style;
    }else return false;
}




