// Funktion, um den Collapser zu öffnen oder zu schließen
function toggleCollapser(button) {
    // Alle anderen Collapser schließen
    const allContent = document.querySelectorAll('.collapser-content');
    allContent.forEach(content => {
        if (content !== button.nextElementSibling) {
            content.classList.remove('open');
            content.previousElementSibling.classList.remove('open'); // Collapser-Button zurückdrehen
        }
    });

    // Der Collapser wird geöffnet oder geschlossen
    const content = button.nextElementSibling;
    content.classList.toggle('open');
    button.classList.toggle('open');
}

// Alle Collapser-Buttons durchgehen und Event Listener hinzufügen
const buttons = document.querySelectorAll('.collapser-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => toggleCollapser(button));
});
