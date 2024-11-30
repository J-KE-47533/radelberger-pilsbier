// Event listener für den 'Weiter'-Button


const h2One = document.getElementById("h2-1");
const h2Two = document.getElementById("h2-2");
const h2Three = document.getElementById("h2-3");
const h2Four = document.getElementById("h2-4");
const h2Five = document.getElementById("h2-5");
const h2Six = document.getElementById("h2-6");
const h2Seven = document.getElementById("h2-7");

document.querySelectorAll('.btn-next').forEach(button => {
    button.addEventListener('click', function () {
        // Den aktuellen Form-Container finden
        const currentSection = this.closest('.form-container');
        const currentSectionId = currentSection.id;

        // Bestimmen, welches die nächste Section ist
        let nextSection = null;

        // Aktuellen Überschriftstext anpassen
        if (currentSectionId === "section-1") {
            nextSection = document.getElementById("section-2");

            h2One.classList.remove('h2-active');
            h2Two.classList.add('h2-active');
            h2Three.classList.remove('h2-active');
            h2Four.classList.remove('h2-active');
            h2Five.classList.remove('h2-active');
            h2Six.classList.remove('h2-active');
            h2Seven.classList.remove('h2-active');

        } else if (currentSectionId === "section-2") {
            nextSection = document.getElementById("section-3");

            h2One.classList.remove('h2-active');
            h2Two.classList.remove('h2-active');
            h2Three.classList.add('h2-active');
            h2Four.classList.remove('h2-active');
            h2Five.classList.remove('h2-active');
            h2Six.classList.remove('h2-active');
            h2Seven.classList.remove('h2-active');

        } else if (currentSectionId === "section-3") {
            nextSection = document.getElementById("section-4");

            h2One.classList.remove('h2-active');
            h2Two.classList.remove('h2-active');
            h2Three.classList.remove('h2-active');
            h2Four.classList.add('h2-active');
            h2Five.classList.remove('h2-active');
            h2Six.classList.remove('h2-active');
            h2Seven.classList.remove('h2-active');

        } else if (currentSectionId === "section-4") {
            nextSection = document.getElementById("section-5");

            h2One.classList.remove('h2-active');
            h2Two.classList.remove('h2-active');
            h2Three.classList.remove('h2-active');
            h2Four.classList.remove('h2-active');
            h2Five.classList.add('h2-active');
            h2Six.classList.remove('h2-active');
            h2Seven.classList.remove('h2-active');

        } else if (currentSectionId === "section-5") {
            nextSection = document.getElementById("section-6");
            h2One.classList.remove('h2-active');
            h2Two.classList.remove('h2-active');
            h2Three.classList.remove('h2-active');
            h2Four.classList.remove('h2-active');
            h2Five.classList.remove('h2-active');
            h2Six.classList.add('h2-active');
            h2Seven.classList.remove('h2-active');

        } else if (currentSectionId === "section-6") {
            nextSection = document.getElementById("section-7");
            h2One.classList.remove('h2-active');
            h2Two.classList.remove('h2-active');
            h2Three.classList.remove('h2-active');
            h2Four.classList.remove('h2-active');
            h2Five.classList.remove('h2-active');
            h2Six.classList.remove('h2-active');
            h2Seven.classList.add('h2-active');

        }

        // Sichtbarkeit der Sections steuern: currentSection ausblenden, nextSection einblenden
        currentSection.classList.remove('active');
        nextSection.classList.add('active');
    });
});

// Event listener für den 'Zurück'-Button
document.querySelectorAll('.btn-back').forEach(button => {
    button.addEventListener('click', function () {
        // Den aktuellen Form-Container finden
        const currentSection = this.closest('.form-container');
        const currentSectionId = currentSection.id;

        // Bestimmen, welches die vorherige Section ist
        let prevSection = null;

        if (currentSectionId === "section-2") {
            prevSection = document.getElementById("section-1");
            h2One.classList.add('h2-active');
            h2Two.classList.remove('h2-active');
            h2Three.classList.remove('h2-active');
            h2Four.classList.remove('h2-active');
            h2Five.classList.remove('h2-active');
            h2Six.classList.remove('h2-active');
            h2Seven.classList.remove('h2-active');
        } else if (currentSectionId === "section-3") {
            prevSection = document.getElementById("section-2");
            h2One.classList.remove('h2-active');
            h2Two.classList.add('h2-active');
            h2Three.classList.remove('h2-active');
            h2Four.classList.remove('h2-active');
            h2Five.classList.remove('h2-active');
            h2Six.classList.remove('h2-active');
            h2Seven.classList.remove('h2-active');
        } else if (currentSectionId === "section-4") {
            prevSection = document.getElementById("section-3");
            h2One.classList.remove('h2-active');
            h2Two.classList.remove('h2-active');
            h2Three.classList.add('h2-active');
            h2Four.classList.remove('h2-active');
            h2Five.classList.remove('h2-active');
            h2Six.classList.remove('h2-active');
            h2Seven.classList.remove('h2-active');
        } else if (currentSectionId === "section-5") {
            prevSection = document.getElementById("section-4");
            h2One.classList.remove('h2-active');
            h2Two.classList.remove('h2-active');
            h2Three.classList.remove('h2-active');
            h2Four.classList.add('h2-active');
            h2Five.classList.remove('h2-active');
            h2Six.classList.remove('h2-active');
            h2Seven.classList.remove('h2-active');
        } else if (currentSectionId === "section-6") {
            prevSection = document.getElementById("section-5");
            h2One.classList.remove('h2-active');
            h2Two.classList.remove('h2-active');
            h2Three.classList.remove('h2-active');
            h2Four.classList.remove('h2-active');
            h2Five.classList.add('h2-active');
            h2Six.classList.remove('h2-active');
            h2Seven.classList.remove('h2-active');
        } else if (currentSectionId === "section-7") {
            prevSection = document.getElementById("section-6");
            h2One.classList.remove('h2-active');
            h2Two.classList.remove('h2-active');
            h2Three.classList.remove('h2-active');
            h2Four.classList.remove('h2-active');
            h2Five.classList.remove('h2-active');
            h2Six.classList.add('h2-active');
            h2Seven.classList.remove('h2-active');
        }

        // Sichtbarkeit der Sections steuern: currentSection ausblenden, prevSection einblenden
        currentSection.classList.remove('active');
        prevSection.classList.add('active');
    });
});
// Event listener für das Klicken auf die Überschriften (h2)
document.querySelectorAll('h2').forEach(h2 => {
    h2.addEventListener('click', function () {
        const sectionId = this.id.split('-')[1]; // Extrahiere die Nummer des h2 (z.B. "1" von "h2-1")
        const section = document.getElementById(`section-${sectionId}`);

        // Überprüfen, ob die entsprechende Section existiert
        if (section) {
            // Bestimmen, welches die nächste Section ist
            let nextSection = null;

            if (sectionId === "1") {
                nextSection = document.getElementById("section-1");
                h2One.classList.add('h2-active');
                h2Two.classList.remove('h2-active');
                h2Three.classList.remove('h2-active');
                h2Four.classList.remove('h2-active');
                h2Five.classList.remove('h2-active');
                h2Six.classList.remove('h2-active');
                h2Seven.classList.remove('h2-active');
            } else if (sectionId === "2") {
                nextSection = document.getElementById("section-2");
                h2One.classList.remove('h2-active');
                h2Two.classList.add('h2-active');
                h2Three.classList.remove('h2-active');
                h2Four.classList.remove('h2-active');
                h2Five.classList.remove('h2-active');
                h2Six.classList.remove('h2-active');
                h2Seven.classList.remove('h2-active');
            } else if (sectionId === "3") {
                nextSection = document.getElementById("section-3");
                h2One.classList.remove('h2-active');
                h2Two.classList.remove('h2-active');
                h2Three.classList.add('h2-active');
                h2Four.classList.remove('h2-active');
                h2Five.classList.remove('h2-active');
                h2Six.classList.remove('h2-active');
                h2Seven.classList.remove('h2-active');
            } else if (sectionId === "4") {
                nextSection = document.getElementById("section-4");
                h2One.classList.remove('h2-active');
                h2Two.classList.remove('h2-active');
                h2Three.classList.remove('h2-active');
                h2Four.classList.add('h2-active');
                h2Five.classList.remove('h2-active');
                h2Six.classList.remove('h2-active');
                h2Seven.classList.remove('h2-active');
            } else if (sectionId === "5") {
                nextSection = document.getElementById("section-5");
                h2One.classList.remove('h2-active');
                h2Two.classList.remove('h2-active');
                h2Three.classList.remove('h2-active');
                h2Four.classList.remove('h2-active');
                h2Five.classList.add('h2-active');
                h2Six.classList.remove('h2-active');
                h2Seven.classList.remove('h2-active');
            } else if (sectionId === "6") {
                nextSection = document.getElementById("section-6");
                h2One.classList.remove('h2-active');
                h2Two.classList.remove('h2-active');
                h2Three.classList.remove('h2-active');
                h2Four.classList.remove('h2-active');
                h2Five.classList.remove('h2-active');
                h2Six.classList.add('h2-active');
                h2Seven.classList.remove('h2-active');
            } else if (sectionId === "7") {
                nextSection = document.getElementById("section-7");
                h2One.classList.remove('h2-active');
                h2Two.classList.remove('h2-active');
                h2Three.classList.remove('h2-active');
                h2Four.classList.remove('h2-active');
                h2Five.classList.remove('h2-active');
                h2Six.classList.remove('h2-active');
                h2Seven.classList.add('h2-active');
            }

            // Sichtbarkeit der Sections steuern: aktuelle Section ausblenden, die nächste Section einblenden
            document.querySelector('.form-container.active').classList.remove('active');
            nextSection.classList.add('active');
        } else {
            console.error("Section nicht gefunden: " + sectionId);
        }
    });
});



    function showPopup() {
        document.getElementById('popup').style.display = 'flex';
    }

    // Funktion, um das Popup zu schließen
    function closePopup() {
        document.getElementById('popup').style.display = 'none';
    }

    // Überprüfen, ob das Popup nach einem Seitenreload angezeigt werden soll
    window.onload = function() {
        if (sessionStorage.getItem('formSubmitted') === 'true') {
            showPopup();
            sessionStorage.removeItem('formSubmitted');  // Löscht den Zustand nach der Anzeige
        }
    }

    // Formularabsendefunktion
    document.getElementById('Form-submit').addEventListener('click', function(event) {
        // event.preventDefault(); // Verhindert das normale Absenden des Formulars
        
        // Überprüfen, ob das Formular gültig ist
        const form = document.querySelector('form'); // Falls du die Felder in einem <form> hast
        if (form.checkValidity()) {
            // Speichern des Zustands, dass das Formular abgeschickt wurde
            sessionStorage.setItem('formSubmitted', 'true');
            
            // Seite neu laden
            location.reload();
        } else {
        }
    });

    const zettel = document.getElementById('zettel');
    const merkzettel = document.getElementById('merkzettel-container');
    const merkzettelClose = document.getElementById('merkzettel-close');
    const merkzettelCloseBtn = document.getElementById('merkzettel-close-btn');
    
    // Funktion, die die Position basierend auf der Bildschirmbreite setzt
    function updateMerkzettelPosition() {
        const mediaQuery = window.matchMedia("(max-width: 760px)");
        return mediaQuery.matches ? 'calc(-100% + 42.48px)' : '-38.9rem';
    }

    function updateMerkzettelSize() {
        const mediaQuery = window.matchMedia("(max-width: 760px)");
        return mediaQuery.matches ? 'calc(100% - 6px)' : 'width: 667px';
    }

    function updateMerkzettelRetourn() {
        const mediaQuery = window.matchMedia("(max-width: 760px)");
        return mediaQuery.matches ? '100%' : 'width: 667px';
    }

    function updateMerkzettelIcon() {
        const mediaQuery = window.matchMedia("(max-width: 760px)");
        return mediaQuery.matches ? 'none' : 'block';
    }
    
    zettel.addEventListener('click', function() {
        merkzettel.style.right = '0';
        merkzettel.style.width = updateMerkzettelSize();
        merkzettelClose.style.display = 'block';
        zettel.style.display = updateMerkzettelIcon();
    });
    
    merkzettelClose.addEventListener('click', function () {
        merkzettel.style.right = updateMerkzettelPosition(); // Dynamische Breite
        merkzettel.style.width = updateMerkzettelRetourn();
        merkzettelClose.style.display = 'none';
        zettel.style.display = 'block'
    });

    merkzettelCloseBtn.addEventListener('click', function () {
        merkzettel.style.right = updateMerkzettelPosition(); // Dynamische Breite
        merkzettel.style.width = updateMerkzettelRetourn();
        merkzettelClose.style.display = 'none';
        zettel.style.display = 'block'
    });
    
    // Optional: Aktualisiere `merkzettel` Position bei Fenstergröße ändern
    window.addEventListener('resize', function () {
        if (merkzettel.style.right !== '0') { // Nur anpassen, wenn merkzettel geschlossen ist
            merkzettel.style.right = updateMerkzettelPosition();
        }
    });