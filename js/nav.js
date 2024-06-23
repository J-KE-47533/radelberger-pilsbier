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

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navi.style.padding = "0.5rem 0";
        } else {
            navi.style.padding = "2rem 0";
        }
    })
})

window.addEventListener('touchstart', (navopen) => {
    start1x = navopen.touches[0].clientX;
})

window.addEventListener('touchend', (navopen) => {
    end1x = navopen.changedTouches[0].clientX;
    if (start1x > end1x + 10) {
        navlist.style.right = "0";
    }
    
})



// document.addEventListener('DOMContentLoaded', () => {


// })