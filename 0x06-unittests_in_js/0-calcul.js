// 0-calcul.js

// Fonction qui accepte deux arguments (a et b), les arrondit, puis retourne leur somme
function calculateNumber(a, b) {
    // Arrondir les deux nombres à l'entier le plus proche et retourner leur somme
    return Math.round(a) + Math.round(b);
}

// Exporter la fonction pour qu'elle puisse être utilisée dans d'autres fichiers
module.exports = calculateNumber;

