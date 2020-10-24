function done() {
    var x = document.getElementById("urls").value;
    if (x.length != "") {
        document.getElementById("showurl").src = x;
    } else {
        alert("Incorrect url")
    }
}

function done1() {
    var x = document.getElementById("url1").value;
    if (x.length != "") {
        document.getElementById("showurls").src = x;
    } else {
        alert("Incorrect url")
    }

}

function done2() {
    var x = document.getElementById("urls1").value;
    if (x.length != "") {
        document.getElementById("showurl1").src = x;
    } else {
        alert("Incorrect url")
    }

}

function done11() {
    var x = document.getElementById("url11").value;
    if (x.length != "") {
        document.getElementById("showurls2").src = x;
    } else {
        alert("Incorrect url")
    }

}