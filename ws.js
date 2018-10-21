var host = window.location.host;
var path = window.location.pathname;
//var webCtx = path.substring(0, path.indexOf('/', 1));
var endPointURL = "ws://" + host + path;
//var endPointURL = "ws://" + "table.do";
alert("endPointURL : " + endPointURL);
var res = null;

var socket = new WebSocket(endPointURL);
socket.onmessage = message;

function message(e){
    alert("onmessage is ok.");
    res = e;
    socket.send(e);
}

function changeSend(e) {
    e.target.options;
    alert("changeSend function, res : " + res);
    socket.send("Message is sended, code is work.");
}


//socket.onclose = function (event) {};
//socket.onopen = function (event) {};
//socket.onerror = function (event) {};

//socket.onsend = function (event){};



//alert("host : " + host + ", path : " + path + ", webCtx : " + webCtx + ", \nendPointURL : " + endPointURL);
//alert("socket : " + socket);
