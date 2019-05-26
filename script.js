$(".button").click(function () {
    $(this).toggleClass("active");
    $(".icons").toggleClass("open");
});
var blv = document.querySelector("body");
var tex = document.querySelector("p");
var ok = 0;
var onOff = 0;
var ok1 = 0;
var onOff1 = 0;
var ok2 = 0;
var onOff = 0;
function lv() {
    if (onOff == 0) {
        ok = 1;
        onOff = 1;
    }
    else {
        ok = 0;
        onOff = 0;
    }

    lv2();
}
function lv2() {
    if (ok == 1) {
        blv.style.backgroundColor = "#000000";
        blv.style.color = "white";
        tex.style.fontSize = "4em";
    }
    else {
        blv.style.backgroundColor = "";
        blv.style.color = "";
        tex.style.fontSize = "";
    }
}
function de() {
    if (onOff1 == 0) {
        ok1 = 1;
        onOff1 = 1;
    }
    else {
        ok1 = 0;
        onOff1 = 0;
    }

    de2();
}
function de2() {
    if (ok1 == 1) {
        blv.style.backgroundColor = "#000000";
        blv.style.color = "white";
        tex.style.fontSize = "4em";
    }
    else {
        blv.style.backgroundColor = "";
        blv.style.color = "";
        tex.style.fontSize = "";
    }
}
function uA() {
    if (onOff2 == 0) {
        ok2 = 1;
        onOff2 = 1;
    }
    else {
        ok2 = 0;
        onOff2 = 0;
    }

    uA2();
}
function uA2() {
    if (ok2 == 1) {
        blv.style.backgroundColor = "#000000";
        blv.style.color = "white";
        tex.style.fontSize = "4em";
    }
    else {
        blv.style.backgroundColor = "";
        blv.style.color = "";
        tex.style.fontSize = "";
    }
}
