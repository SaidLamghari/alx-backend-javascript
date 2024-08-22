// 3-payment.js
// Auteur SAID LAMGHARI

const Utils = require('./utils');

/**
 * Envoie une requête de paiement à l'API.
 * @param {number} totalAmount - Le montant total.
 * @param {number} totalShipping - Les frais de livraison.
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  // Calculer le total en utilisant Utils.calculateNumber
  const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);

  // Afficher le résultat dans la console
  console.log(`The total is: ${total}`);
}

// Exporter la fonction
module.exports = sendPaymentRequestToApi;
