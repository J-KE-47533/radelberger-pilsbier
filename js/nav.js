var menubutton = document.getElementById("navbtn");
var navlist = document.getElementById("navlistmobil");
var navclose = document.getElementById("navbtnclose");
var navscroll = document.getElementById("navmain");

var windowHeight = window.innerHeight;
var scrollY = window.scrollY;

// Position des unteren Bildschirmrandes berechnen
var bottomPosition = scrollY + windowHeight;


menubutton.onclick = function () {
    navlist.style.right = "0";
}

navclose.onclick = function () {
    navlist.style.right = "-100%";
}

window.onscroll = function () {
    navscroll.style.padding = "1rem 0";
}

if (bottomPosition >= 500) {
    navscroll.style.padding = "2rem 0";
} else {
    navscroll.style.padding = "1rem 0";
}