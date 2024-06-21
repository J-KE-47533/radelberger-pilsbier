const slide = document.querySelectorAll('.slide');
var letzteaktualisierung = new Date();

aktuellerindex = 0;

slide[0].classList.add("active");

function umschalten(anzahl) {

    slide[aktuellerindex].classList.remove("active");

    neuerindex = (aktuellerindex + anzahl);

    if (neuerindex > slide.length -1) {
        neuerindex = 0;
    }

    if (neuerindex < 0) {
        neuerindex = slide.length - 1;
    }

    slide[neuerindex].classList.add("active");
    letzteaktualisierung = new Date();

    aktuellerindex = neuerindex;

}

function Automatischumschalten() {
    const zeit = new Date() - letzteaktualisierung;
    if (zeit >= 3000) {
        umschalten(1)
    }
}

setInterval(Automatischumschalten, 3000, 1)