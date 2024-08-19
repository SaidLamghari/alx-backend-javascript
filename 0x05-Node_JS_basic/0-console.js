/**
 * Affiche le message fourni dans la sortie standard (STDOUT).
 *
 * Cette fonction utilise `console.log` pour afficher le message à l'écran.
 *
 * @param {string} message - Le message à afficher dans la console.
 *
 * Auteur SAID LAMGHARI
 */
function displayMessage(message) {
  console.log(message);
}

// Exporte la fonction `displayMessage` pour
// qu'elle puisse être utilisée dans d'autres fichiers.
// Cette ligne permet à `0-main.js` d'importer
// et d'utiliser la fonction `displayMessage`.
module.exports = displayMessage;
