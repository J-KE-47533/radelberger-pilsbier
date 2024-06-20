let startX, startY, endX, endY;

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
}

function handleTouchMove(event) {
    if (!startX || !startY) {
        return;
    }

    endX = event.touches[0].clientX;
    endY = event.touches[0].clientY;
}

function handleTouchEnd() {
    if (!startX || !startY || !endX || !endY) {
        return;
    }

    const diffX = endX - startX;
    const diffY = endY - startY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        // Horizontale Swipe
        if (diffX > 0) {
            // Swipe nach rechts
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        } else {
            // Swipe nach links
            currentIndex = (currentIndex + 1) % totalSlides;
        }
        showSlide(currentIndex);
    }

    // Variablen zurücksetzen
    startX = null;
    startY = null;
    endX = null;
    endY = null;
}

// Event Listener für Touch-Ereignisse
const slider = document.querySelector('.slider');
slider.addEventListener('touchstart', handleTouchStart, false);
slider.addEventListener('touchmove', handleTouchMove, false);
slider.addEventListener('touchend', handleTouchEnd, false);
