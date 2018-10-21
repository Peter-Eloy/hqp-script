

function getXmlHttp(){
    return new XMLHttpRequest();
}

var xmlhttp = getXmlHttp();

function callback1(url, tosend){
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState===4 && xmlhttp.status===200){
            tosend.innerHTML=xmlhttp.responseText;
        }
    };
    xmlhttp.open("GET", url);
    xmlhttp.send(null);
}

function callback(url){
    var result;
    xmlhttp.onreadystatechange=function(){
        if ((xmlhttp.readyState === 4) && (xmlhttp.status === 200)){
            result = xmlhttp.responseText;
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    //alert("Url is: " + url + ", result from ajax is: " + result);
    return result;
}
