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

    // Calcule les degrés de rotation pour chaque aiguille
    const hourRotation = (hours * 30) + (minutes * 0.5);
    const minuteRotation = (minutes * 6) + (seconds * 0.1);
    const secondRotation = seconds * 6;

    // Applique la rotation aux aiguilles en utilisant des transformations CSS
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}



// Met à jour les aiguilles toutes les secondes
setInterval(rotateClockHands, 1000);

// Appelle la fonction une fois au chargement de la page pour éviter le délai initial
rotateClockHands();