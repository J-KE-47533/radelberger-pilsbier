var menubutton = document.getElementById("navbtn");
var navlist = document.getElementById("navlistmobil");
var navclose = document.getElementById("navbtnclose");


menubutton.onclick = function () {
    navlist.style.right = "0";
}

navclose.onclick = function () {
    navlist.style.right = "-100%";
}

// document.addEventListener('DOMContentLoaded', () => {
//     const navi = document.getElementById('navmain');

//     window.addEventListener('scroll', () => {
//         if (window.scrollY > 0) {
//             navi.style.padding = "0.5rem 0";
//         } else {
//             navi.style.padding = "2rem 0";
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const navi = document.getElementById('navmain');
    const logo = document.getElementById('logo');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navi.style.padding = "0.5rem 0";
            logo.style.width = "60%";
        } else {
            navi.style.padding = "2rem 0";
            logo.style.width = "100%";
        }
    })
})

// var header = document.getElementById('header');
// const headerheight = header.height;


// window.addEventListener('touchstart', (navopen) => {
//     start1x = navopen.touches[0].clientX;
//     start1y = navopen.touches[0].clientY;
// })

// window.addEventListener('touchend', (navopen) => {
//     const end1x = navopen.changedTouches[0].clientX;
//     const end1y = navopen.changedTouches[0].clientY;

//     // Überprüfe, ob das Touch-Event außerhalb des Headers gestartet hat
//     if (start1y > headerheight) {
//         if (start1x > end1x + 100) {
//             navlist.style.right = "0";
//         }

//         if (end1x > start1x + 100) {
//             navlist.style.right = "-100%";
//         }
//     }
// });

var navitemmobil = document.querySelectorAll('.navitem');

for (var i = 0; i < navitemmobil.length; i++) {
    navitemmobil[i].onclick = function () {
        navlist.style.right = "-100%";
    }
}