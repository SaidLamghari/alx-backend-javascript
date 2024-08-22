// Auteur SAID LAMGHARI
// Importation de la fonction à tester
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');
// Importation de la fonction 'expect' de la bibliothèque 'chai' pour les assertions

// Définition du groupe de tests pour la fonction getPaymentTokenFromAPI
describe('getPaymentTokenFromAPI', () => {
  // Déclaration du test pour vérifier le comportement lorsque 'success' est true
  it('should return a resolved promise with data when success is true', () => new Promise((done) => {
    // Appeler la fonction getPaymentTokenFromAPI avec 'true' comme argument
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Lorsque la promesse est résolue, vérifier que la réponse est correcte
        // On s'attend à ce que la réponse soit un objet
        // avec une clé 'data' et une valeur spécifique
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        // Indiquer que le test est terminé avec succès
        done();
      })
      .catch((error) => {
        // En cas d'erreur (promesse rejetée), échouer
        // le test en passant l'erreur à 'done'
        done(error);
      });
  }));
});
