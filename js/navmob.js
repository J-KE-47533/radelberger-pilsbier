document.addEventListener('touchstart', function(event) {
    const startx = event.touches[0].clientX;
    const starty = event.touches[0].clientY;

    const startElement = document.elementFromPoint(startx, starty);
    if (startElement.closest('header')) {
        // Wenn der Startpunkt im Header liegt, tue nichts
        return;
    }
});