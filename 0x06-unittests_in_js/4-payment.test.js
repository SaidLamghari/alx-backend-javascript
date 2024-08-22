// Auteur SAID LAMGHARI
// Importation des modules nécessaires pour les tests
const sinon = require('sinon'); // Bibliothèque pour créer des spies, stubs et mocks
const { expect } = require('chai'); // Bibliothèque d'assertions pour les tests
const Utils = require('./utils'); // Importation du module utilitaire
const sendPaymentRequestToApi = require('./4-payment'); // Importation de la fonction à tester

// Définition du groupe de tests pour la fonction sendPaymentRequestToApi
describe('sendPaymentRequestToApi', () => {
  let stub; // Variable pour stocker le stub de Utils.calculateNumber
  let spy; // Variable pour stocker le spy sur console.log

  // Cette fonction est exécutée avant chaque test
  beforeEach(() => {
    // Création d'un stub pour la méthode Utils.calculateNumber
    // Le stub remplace la méthode originale et retourne toujours 10 peu importe les arguments
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Création d'un spy pour surveiller les appels à console.log
    spy = sinon.spy(console, 'log');
  });

  // Cette fonction est exécutée après chaque test
  afterEach(() => {
    // Restauration de la méthode originale de Utils.calculateNumber
    stub.restore();
    // Restauration de la méthode originale de console.log
    spy.restore();
  });

  // Test pour vérifier que Utils.calculateNumber est appelé avec les bons arguments
  it('should call Utils.calculateNumber with SUM type and correct arguments', () => {
    // Appel de la fonction sendPaymentRequestToApi avec des arguments de test
    sendPaymentRequestToApi(100, 20);

    // Vérification que le stub a été appelé une fois avec les arguments spécifiés
    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });

  // Test pour vérifier que le message correct est affiché dans la console
  it('should log the correct message to the console', () => {
    // Appel de la fonction sendPaymentRequestToApi avec des arguments de test
    sendPaymentRequestToApi(100, 20);

    // Vérification que console.log a été appelé une fois avec le message correct
    expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
