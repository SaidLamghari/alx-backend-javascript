// utils.js
// Auteur SAID LAMGHARI

/**
 * Effectue une opération sur deux nombres
 * arrondis en fonction du type spécifié.
 * @param {string} type - Le type d'opération ('SUM', 'SUBTRACT', 'DIVIDE').
 * @param {number} a - Le premier nombre.
 * @param {number} b - Le deuxième nombre.
 * @returns {number|string} - Le résultat de l'opération
 * ou 'Error' en cas de division par zéro.
 */
function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      if (roundedB === 0) {
        return 'Error';
      }
      return roundedA / roundedB;
    default:
      throw new Error('Invalid type');
  }
}

// Créer un module Utils pour exporter la fonction calculateNumber
const Utils = {
  calculateNumber,
};

// Exporter le module Utils
module.exports = Utils;
