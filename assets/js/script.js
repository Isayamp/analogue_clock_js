// Obtient les éléments des aiguilles de l'horloge
const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');

function rotateClockHands() {
    // Obtient la date et l'heure actuelles
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
}