// Auteur SAID LAMGHARI
// Importation des modules nécessaires pour les tests
// Importation de la fonction 'expect' de
// la bibliothèque 'chai' pour les assertions
const { expect } = require('chai');
// Importation de la fonction à tester
const getPaymentTokenFromAPI = require('./6-payment_token');

// Définition du groupe de tests pour la fonction getPaymentTokenFromAPI
describe('getPaymentTokenFromAPI', () => {
  // Test pour vérifier que la fonction retourne
  // une réponse réussie lorsque 'success' est true
  it('should return a successful response when success is true', () => new Promise((done) => {
    // Appeler la fonction avec success = true
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Vérifier que la réponse est correcte
        // On s'attend à ce que la fonction retourne un objet avec
        // une clé 'data' et une valeur de message spécifique
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        // Indiquer que le test est terminé en appelant 'done()' sans argument
        done();
      })
      .catch((err) => {
        // En cas d'erreur, échouer le test en passant l'erreur à 'done()'
        done(err);
      });
  }));

  // Test pour vérifier que la promesse est rejetée lorsque 'success' est false
  it('should not resolve the promise when success is false', () => new Promise((done) => {
    // Appeler la fonction avec success = false
    getPaymentTokenFromAPI(false)
      .then(() => {
        // Si la promesse est résolue, le test
        // échoue car on s'attend à ce qu'elle soit rejetée
        done(new Error('Promise should not have been resolved'));
      })
      .catch(() => {
        // Si la promesse est rejetée, le test réussit
        done();
      });
  }));
});
