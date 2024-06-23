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

    slider.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });

    slider.addEventListener('touchend', (event) => {
        endX = event.changedTouches[0].clientX;

        if (startX > endX + 30) {
            umschalten(1);
        } else if (startX < endX - 30) {
            umschalten(-1);
        }
    });
});