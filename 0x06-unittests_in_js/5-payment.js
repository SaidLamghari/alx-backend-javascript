// Auteur SAID LAMGHARI
// Importation du module 'utils', qui contient des fonctions utilitaires.
const Utils = require('./utils');

/**
 * Envoie une requête de paiement à l'API en calculant le montant total.
 *
 * @param {number} totalAmount - Le montant total de la commande avant les frais de livraison.
 * @param {number} totalShipping - Les frais de livraison qui s'ajoutent au montant total.
 *
 * Cette fonction calcule le montant total en utilisant la fonction `calculateNumber`
 * du module `Utils` et affiche le montant total dans la console.
 *
 * Voici comment la fonction fonctionne :
 * 1. La fonction reçoit deux arguments :
 *    - `totalAmount` : Le montant total de la commande.
 *    - `totalShipping` : Les frais de livraison.
 * 2. Elle utilise la fonction `Utils.calculateNumber` pour calculer le montant total en passant
 *    la chaîne de caractères `'SUM'` et les deux montants
 *    comme arguments. La chaîne `'SUM'` indique
 *    que la fonction doit effectuer une addition.
 * 3. Le résultat de ce calcul est stocké dans la variable `total`.
 * 4. Le montant total est ensuite affiché dans la console avec un message descriptif.
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  // Calculer le montant total en utilisant la fonction 'calculateNumber' du module 'Utils'.
  // La fonction 'calculateNumber' est censée effectuer des opérations
  // arithmétiques en fonction de l'opération spécifiée.
  // Ici, nous utilisons 'SUM' pour additionner les valeurs fournies.
  const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);

  // Afficher le montant total calculé dans la
  // console pour les besoins de débogage ou de confirmation.
  console.log(`The total is: ${total}`);
}

// Exporter la fonction pour qu'elle puisse être utilisée dans d'autres modules ou fichiers.
module.exports = sendPaymentRequestToApi;
