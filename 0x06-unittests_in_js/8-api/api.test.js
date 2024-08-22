// 8-api/api.test.js

const request = require('request');
const { expect } = require('chai');
const app = require('./api');
// Importer l'application Express
const port = 7865;

// Définir l'URL de base pour les requêtes
const baseUrl = `http://localhost:${port}`;

describe('index page', () => {
  // Variable pour stocker le serveur
  let server;

  // Avant chaque test, démarrer le serveur
  before((done) => {
    server = app.listen(port, done);
  });

  // Après chaque test, arrêter le serveur
  after((done) => {
    server.close(done);
  });

  it('should return status code 200', () => new Promise((done) => {
    request.get(baseUrl, (err, res) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      done();
    });
  }));

  it('should return the correct message', () => new Promise((done) => {
    request.get(baseUrl, (err, res, body) => {
      if (err) return done(err);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));

  it('should handle other scenarios correctly', () => new Promise((done) => {
    // Vous pouvez ajouter d'autres scénarios ici si nécessaire
    done();
  }));
});
