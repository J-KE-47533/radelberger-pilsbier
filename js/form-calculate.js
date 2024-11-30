document.addEventListener('DOMContentLoaded', () => {
    // Preise definieren
    const basePrices = {
        "zarte-haferflocken": 2.50,
        "großblättrige-haferflocken": 2.70,
        "haferschrot": 3.5,
        "geroestete-haferflakes": 5.33,
        "dinkelmuesli": 4,
        "quinoaflocken": 7.50,
        "buchweizenflocken": 7,
        "amaranth-pops": 10.00,
        "vollkorn-reisflocken": 6.50,
        "rice-krispies": 6.33,
        "maisgrieß": 3.00,
        "hirseflocken": 6.33,
        "gerstenflocken": 3.75,
        "gersten-roggenschrot": 3.75,
        "cornflakes": 5.83,
        "crunchy-muesli": 6.43,
        "muesliriegelstueckchen": 11.67,
        "weizenkleie": 6.25,
        "cranberries": 10,
        "goji-beeren": 21.67,
        "heidelbeeren": 18.33, 
        "erdbeerscheiben": 30, 
        "kirschen": 16.67,
        "mangostueckchen": 16.67,
        "ananasstuecke": 15,
        "bananenchips": 7,
        "aprikosen": 10,
        "apfelringe": 17.5,
        "datteln": 10.5,
        "feigen": 4.5,
        "rosinen": 11.25,
        "mandeln": 13.33,
        "walnuesse": 15,
        "haselnuesse": 14,
        "pistazien": 27.5,
        "cashewkerne": 16,
        "pekanüsse": 16.67,
        "sonnenblumenkerne": 6.25,
        "kuerbiskerne": 11.67,
        "chiasamen": 17.5,
        "leinsamen": 6.25,
        "hanfsamen": 20,
        "sesamsamen": 7,
        "matcha-pulver": 80,
        "maca-pulver": 27.5,
        "baobab-pulver": 30,
        "spirulina": 70,
        "lucuma-pulver": 25,
        "weizengraspulver": 32.5,
        "gojipulver": 37.5,
        "acai-beeren": 42.5,
        "trockene-maulbeeren": 18.3,
        "kakaonibs": 22.5,
        "kokosflocken": 11.67,
        "dunkle-schokoladenstuecke": 12.67,
        "weiße-schokoladenstuecke": 12.67,
        "karamellstueckchen": 13.33,
        "kokoschips": 11.67,
        "honig": 12,
        "ahornsirup": 16,
        "agavendicksaft": 9,



        "hafermilch": 0.925,
        "mandelmilch": 1.125,
        "kokosmilch": 1.125,
        "sojamilch": 0.875,
        "reismilch": 0.925,
        "vollmilch": 0.775,
        "joghurt": 1.9,
        "wasser": 0.925,
        "kokoswasser": 1.025,



    };

// Preise in die price-section hinzufügen und dynamische Updates konfigurieren
for (const [id, price] of Object.entries(basePrices)) {
    const priceSection = document.querySelector(`.${id} .price-section`);
    const selectElement = document.getElementById(`${id}-select`);

    if (!priceSection) {
        console.warn(`Price section for ${id} not found.`);
        continue;
    }

    // Basispreis anzeigen
    const priceSpan = document.createElement('span');
    priceSpan.classList.add('price');
    priceSection.appendChild(priceSpan);

    // Funktion zur Berechnung und Anzeige des Preises basierend auf der Auswahl
    const updatePrice = () => {
        if (!selectElement) return; // Überspringen, falls selectElement fehlt
        const selectedWeight = parseInt(selectElement.value) || 0; // Standardwert 0
        const updatedPrice = (price / 500) * selectedWeight; // Neuer Preis berechnen
        priceSpan.textContent = `${updatedPrice.toFixed(2)} €`; // Preis anzeigen
    };

    // Initialen Preis direkt beim Laden der Seite setzen
    if (selectElement) {
        updatePrice();
        selectElement.addEventListener('change', updatePrice); // Preis bei Auswahländerung aktualisieren
    } else {
        console.warn(`Select element for ${id} not found.`);
    }
}

const orderSummaries = document.querySelectorAll('.bestelluebersicht .order-summary');
const totalPrices = document.querySelectorAll('.bestelluebersicht .total-price');
const clearButtons = document.querySelectorAll('.clear-selection');
const weightsUse = document.querySelectorAll('.weights .use');
const weightsFree = document.querySelectorAll('.weights .free');

let selectedItems = [];
let total = 0;
let totalWeight = 0;

const updateItemCountBadge = () => {
    const itemCountBadge = document.getElementById('item-count-badge');
    const itemCount = selectedItems.length;

    if (itemCount > 0) {
        itemCountBadge.textContent = itemCount;
        itemCountBadge.style.visibility = 'visible';
    } else {
        itemCountBadge.style.visibility = 'hidden';
    }
};

// Aktualisiere den Zähler nach Änderungen in der Bestellübersicht
const updateOrderSummary = () => {
    orderSummaries.forEach((orderSummary) => {
        const summaryList = document.createElement('div');
        summaryList.classList.add('order-articel-container');

        selectedItems.forEach(({ id, name, weight, price }) => {
            const listItem = document.createElement('div');
            listItem.classList.add('order-article');

            const listItemTitle = document.createElement('div');
            listItemTitle.classList.add('order-article-titel');

            const listItemPrice = document.createElement('div');
            listItemPrice.classList.add('order-article-price');

            listItemPrice.textContent = `${price.toFixed(2)} €`;
            listItemTitle.textContent = `${name} (${weight} g)`;

            const removeButton = document.createElement('button');
            removeButton.textContent = '✖';
            removeButton.classList.add('remove-item');
            removeButton.title = 'Diesen Artikel entfernen';

            removeButton.addEventListener('click', () => {
                selectedItems = selectedItems.filter(item => item.id !== id);
                total -= price;
                totalWeight -= weight;
                document.getElementById(id).checked = false;
                updateOrderSummary();
            });

            listItemPrice.appendChild(removeButton);
            summaryList.appendChild(listItem);
            listItem.appendChild(listItemTitle);
            listItem.appendChild(listItemPrice);
        });

        if (selectedItems.length === 0) {
            summaryList.innerHTML = '<p>Keine Artikel ausgewählt</p>';
        }

        orderSummary.innerHTML = '';
        orderSummary.appendChild(summaryList);
    });

    const otherWeight = 1000 - totalWeight;

    if (otherWeight < 0) {
        alert("Das Gesamtgewicht darf 1000 g nicht überschreiten!");
        totalWeight = 1000;
        updateOrderSummary();
        return;
    }

    weightsUse.forEach(weightsUse => {
        weightsUse.innerHTML = `Verwendet: <div class="weights-content"><span>${totalWeight}g</span> / 1000g</div>`;
    });

    weightsFree.forEach(weightsFree => {
        weightsFree.innerHTML = `noch übrig: <div class="weights-content"><span>${otherWeight}g</span> / 1000g</div>`;
    });

    totalPrices.forEach(totalPrice => {
        totalPrice.textContent = `${total.toFixed(2)} €`;
    });

    clearButtons.forEach(clearButton => {
        clearButton.style.display = selectedItems.length > 0 ? 'inline-block' : 'none';
    });

    // Aktualisiere den Badge
    updateItemCountBadge();
};

// Initialen Aufruf sicherstellen
updateItemCountBadge();

const createPopup = (message) => {
    const popup = document.createElement('div');
    popup.classList.add('popup-error-overlay'); // Klasse für Hintergrund und Stil

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-error-content');

    const messageElement = document.createElement('p');
    messageElement.textContent = message;

    const closeButton = document.createElement('button');
    closeButton.textContent = 'OK';
    closeButton.classList.add('popup-error-close');
    closeButton.addEventListener('click', () => popup.remove());

    popupContent.appendChild(messageElement);
    popupContent.appendChild(closeButton);
    popup.appendChild(popupContent);

    document.body.appendChild(popup);
};

// Funktion erweitern, um das Popup bei negativem Gewicht anzuzeigen
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        const itemId = e.target.id;

        if (itemId === 'datenschutz') {
            return; // Verarbeitung für Datenschutzerklärung abbrechen
        }

        const labelElement = document.querySelector(`label[for="${itemId}"]`);
        const itemName = labelElement ? labelElement.textContent : 'Unbekannt';
        const selectElement = document.getElementById(`${itemId}-select`);

        if (!selectElement) {
            console.warn(`Select element for ${itemId}-select not found.`);
            return;
        }

        const selectedWeight = parseInt(selectElement.value) || 0; // Standardwert 0
        const basePrice = basePrices[itemId];
        const itemPrice = (basePrice / 500) * selectedWeight;

        const newTotalWeight = totalWeight + (e.target.checked ? selectedWeight : -selectedWeight);

        if (newTotalWeight > 1000) {
            createPopup("Das Gesamtgewicht überschreitet das Limit von 1000g! Bitte wählen Sie weniger Artikel aus.");
            e.target.checked = false; // Checkbox zurücksetzen
            return;
        }

        if (e.target.checked) {
            selectedItems.push({ id: itemId, name: itemName, weight: selectedWeight, price: itemPrice });
            total += itemPrice;
            totalWeight += selectedWeight;
        } else {
            selectedItems = selectedItems.filter(item => item.id !== itemId);
            total -= itemPrice;
            totalWeight -= selectedWeight;
        }

        updateOrderSummary();
    });
});

// Auswahl entfernen
clearButtons.forEach(clearButton => {
    clearButton.addEventListener('click', () => {
        selectedItems = [];
        total = 0;
        totalWeight = 0;

        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });

        updateOrderSummary();
    });
});

// Initialer Zustand
updateOrderSummary();

});