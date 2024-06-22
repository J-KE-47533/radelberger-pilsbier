const slide = document.querySelectorAll('.slide');
var letzteaktualisierung = new Date();
aktuellerindex = 0;
const slider = document.getElementsByClassName("slider");


slide[0].classList.add("active");

function umschalten(anzahl) {

    slide[aktuellerindex].classList.remove("active");

    neuerindex = (aktuellerindex + anzahl);

    if (neuerindex > slide.length -1 ) {
        neuerindex = 0;
    }

    if(neuerindex < 0) {
        neuerindex = slide.length -1;
    }
    slide[neuerindex].classList.add("active");

    aktuellerindex = neuerindex;
    letzteaktualisierung = new Date();
}

function autoumschalten() {
    const zeit = new Date() - letzteaktualisierung;

    if (zeit >= 3000) {
        umschalten(1);
    }
}


setInterval(autoumschalten, 3000);

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    let currentIndex = 0;

    let startX;
    let endX;

    function showSlide(index) {
        slide.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;

        if (startX > endX + 50) {
            // Swipe left
            umschalten(1);
        } else if (startX < endX - 50) {
            // Swipe right
            umschalten(-1);
        }
    });
});