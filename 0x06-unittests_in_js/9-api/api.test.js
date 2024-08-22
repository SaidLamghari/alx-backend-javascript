// Importation de la fonction 'expect' de
// la bibliothèque 'chai' pour les assertions
const { expect } = require('chai');
// Importation du module 'request' pour effectuer des requêtes HTTP
const request = require('request');


// Définition d'un groupe de tests pour les intégrations API
describe('API integration test', () => {
  // URL de base pour l'API que nous allons tester
  const API_LNK = 'http://localhost:7865';

  // Test pour vérifier la réponse correcte de la route GET /
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

  // Test pour vérifier la réponse correcte pour une route GET avec un ID valide
  it('GET /cart/:id returns correct response for valid :id', (done) => {
    // Effectuer une requête GET à la route '/cart/47' avec un ID valide
    request.get(`${API_LNK}/cart/47`, (_err, rs, bdy) => {
      // Vérifier que le code de statut HTTP est 200 (OK)
      expect(rs.statusCode).to.be.equal(200);
      // Vérifier que le corps de la réponse
      // correspond au texte attendu avec l'ID fourni
      expect(bdy).to.be.equal('Payment methods for cart 47');
      // Indiquer que le test est terminé avec succès
      done();
    });
  });

  // Test pour vérifier que la route GET renvoie une
  // erreur 404 pour des valeurs négatives dans :id
  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    // Effectuer une requête GET à la route '/cart/-47' avec un ID négatif
    request.get(`${API_LNK}/cart/-47`, (_err, rs, _bdy) => {
      // Vérifier que le code de statut HTTP est 404 (Not Found)
      expect(rs.statusCode).to.be.equal(404);
      // Indiquer que le test est terminé avec succès
      done();
    });
  });

  // Test pour vérifier que la route GET renvoie une erreur
  // 404 pour des valeurs non numériques dans :id
  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    // Effectuer une requête GET à la route
    // '/cart/d200-44a5-9de6' avec un ID non numérique
    request.get(`${API_LNK}/cart/d200-44a5-9de6`, (_err, rs, _bdy) => {
      // Vérifier que le code de statut HTTP est 404 (Not Found)
      expect(rs.statusCode).to.be.equal(404);
      // Indiquer que le test est terminé avec succès
      done();
    });
  });
});
