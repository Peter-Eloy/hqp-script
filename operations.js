
var languages = document.getElementById("languages");
var knowLang = document.getElementById("knowLanguages");

document.ondblclick = (function (ev) {
    var r = ev.target;
    if (r.nodeName === "OPTION") {
        //alert("ondblclick option");
        changeSelectOptions(ev);
    }
});

function changeSelectOptions(e) {
    var r = e.target;
    if (r.nodeName === "OPTION") {
        var option = document.createElement("option");
        option.text = r.text;
        option.label = r.label;
        option.value = r.value;
        option.title = r.title;
        if (r.parentNode.id === "l") {
            knowLang.add(option);
        } else if (r.parentNode.id === "k") {
            languages.add(option);
        } else {
            //alert("another id : " + r.parentNode.id);
        }
        r.remove(r.selected);
    }
}
















