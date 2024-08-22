// Auteur SAID LAMGHARI
// Importation de la fonction 'expect' depuis la bibliothèque 'chai' pour les assertions
const { expect } = require('chai');
// Importation de la fonction 'getPaymentTokenFromAPI' depuis le fichier '6-payment_token.js'
const getPaymentTokenFromAPI = require('./6-payment_token');

// Définition d'un groupe de tests pour la fonction 'getPaymentTokenFromAPI'
describe('getPaymentTokenFromAPI', () => {
  // Déclaration du test pour vérifier le comportement lorsque 'success' est true
  it('getPaymentTokenFromAPI(success), where success == true', async () => {
    try {
      // Appeler la fonction 'getPaymentTokenFromAPI' avec 'true' comme argument
      const rpns = await getPaymentTokenFromAPI(true);
      // Vérifier que la réponse est correcte
      expect(rpns).to.deep.equal({ data: 'Successful response from the API' });
    } catch (err) {
      // Si une erreur est lancée, faire échouer le test
      throw err;
    }
  });
});
