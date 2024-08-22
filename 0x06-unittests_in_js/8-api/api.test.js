// 8-api/api.test.js
// Importation de la fonction 'expect' de
// la bibliothèque 'chai' pour les assertions
const { expect } = require('chai');
// Importation du module 'request' pour effectuer des requêtes HTTP
const request = require('request');


// Définition d'un groupe de tests pour les intégrations API
describe('API integration test', () => {
  // URL de base pour l'API que nous allons tester
  const API_LNK = 'http://localhost:7865';

  // Déclaration du test pour vérifier la réponse de la route GET /
  it('GET / returns correct response', (done) => {
    // Effectuer une requête GET à la route racine de l'API
    request.get(`${API_LNK}/`, (_err, rs, bdy) => {
      // Vérifier que le code de statut HTTP est 200 (OK)
      expect(rs.statusCode).to.be.equal(200);
      // Vérifier que le corps de la réponse est le texte attendu
      expect(bdy).to.be.equal('Welcome to the payment system');
      // Indiquer que le test est terminé avec succès
      done();
    });
  });
});
