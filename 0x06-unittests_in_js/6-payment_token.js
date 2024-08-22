// Auteur SAID LAMGHARI
/**
 * Fonction simulant une API de paiement.
 *
 * Cette fonction renvoie une promesse qui simule une réponse d'API de paiement.
 * Selon la valeur du paramètre `success`,
 * la promesse sera soit résolue avec une réponse de succès,
 * soit restera en attente sans être résolue.
 *
 * @param {boolean} success - Indique si la réponse doit être réussie ou non.
 *                            Si `true`, la promesse est résolue avec une réponse de succès.
 *                            Si `false`, la promesse ne sera jamais résolue (restera en attente).
 * @returns {Promise} - Une promesse.
 *                      La promesse sera résolue avec un objet `{ data:
 *                      'Successful response from the API' }`
 *                      si `success` est `true`.
 *                      Si `success` est `false`, la promesse ne sera
 *                      pas résolue, ce qui signifie qu'elle
 *                      restera en attente indéfiniment.
 */
function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // Si 'success' est vrai, la promesse est résolue avec une réponse de succès.
      resolve({ data: 'Successful response from the API' });
    } else {
      // Si 'success' est faux, la promesse ne sera jamais résolue ni rejetée.
      // Cela simule un cas où l'API ne répond pas correctement ou reste en attente.
    }
  });
}

// Exporter la fonction pour qu'elle puisse être utilisée dans d'autres modules ou fichiers.
module.exports = getPaymentTokenFromAPI;
