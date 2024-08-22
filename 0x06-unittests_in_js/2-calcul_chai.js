// 2-calcul_chai.js
// auteur SAID LAMGHARI

/**
 * Effectue une opération sur deux nombres arrondis en fonction du type spécifié.
 * @param {string} type - Le type d'opération ('SUM', 'SUBTRACT', 'DIVIDE').
 * @param {number} a - Le premier nombre.
 * @param {number} b - Le deuxième nombre.
 * @returns {number|string} - Le résultat de l'opération ou 'Error' en cas de division par zéro.
 */
function calculateNumber(type, a, b) {
  // Arrondir les deux nombres
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  // Effectuer l'opération en fonction du type
  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      // Vérifier si le diviseur est zéro
      if (roundedB === 0) {
        return 'Error';
      }
      // Effectuer la division
      return roundedA / roundedB;
    default:
      throw new Error('Invalid type');
  }
}

// Exporter la fonction pour l'utiliser dans d'autres fichiers
module.exports = calculateNumber;
