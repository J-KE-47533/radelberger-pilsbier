document.addEventListener('touchstart', function(event) {
    const startx = event.touches[0].clientX;
    const starty = event.touches[0].clientY;

    const startElement = document.elementFromPoint(startx, starty);
    if (startElement.closest('header')) {
        // Wenn der Startpunkt im Header liegt, tue nichts
        return;
    }

    document.addEventListener('touchend', function(event) {
        const endx = event.changedTouches[0].clientX;
        const endy = event.changedTouches[0].clientY;

        const navlist = document.getElementById('navlistmobil'); // Anpassung an deine Navlist-Klasse
        if (startx > endx) {
            navlist.style.right = "0";
        }
        if (startx < endx) {
            navlist.style.right = "-100%";
        }
    });
});