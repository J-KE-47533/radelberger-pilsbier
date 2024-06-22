var menubutton = document.getElementById("navbtn");
var navlist = document.getElementById("navlistmobil");
var navclose = document.getElementById("navbtnclose");


menubutton.onclick = function () {
    navlist.style.right = "0";
}

navclose.onclick = function () {
    navlist.style.right = "-100%";
}

document.addEventListener('DOMContentLoaded', () => {
    const navi = document.getElementById('navmain');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navi.style.padding = "0.5rem 0";
        } else {
            navi.style.padding = "2rem 0";
        }
    });
});