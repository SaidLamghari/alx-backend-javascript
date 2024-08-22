// Importation des modules nécessaires pour les tests
const sinon = require('sinon'); // Bibliothèque pour créer des spies, stubs et mocks
const { expect } = require('chai'); // Bibliothèque d'assertions pour les tests
const Utils = require('./utils'); // Importation du module utilitaire
const sendPaymentRequestToApi = require('./5-payment'); // Importation de la fonction à tester

// Définition du groupe de tests pour la fonction sendPaymentRequestToApi
describe('sendPaymentRequestToApi', () => {
  let spy; // Variable pour stocker le spy sur console.log

  // Cette fonction est exécutée avant chaque test
  beforeEach(() => {
    // Création d'un spy pour surveiller les appels à console.log
    spy = sinon.spy(console, 'log');
  });

  // Cette fonction est exécutée après chaque test
  afterEach(() => {
    // Restauration de la méthode originale de console.log
    spy.restore();
  });

  // Test pour vérifier que le message correct est affiché
  // lorsque la fonction est appelée avec 100 et 20
  it('should log the correct message when called with 100 and 20', () => {
    // Stub de la méthode Utils.calculateNumber pour retourner 120
    // Ceci remplace la méthode originale pour cette instance de test
    sinon.stub(Utils, 'calculateNumber').returns(120);

    // Appel de la fonction sendPaymentRequestToApi avec des arguments de test
    sendPaymentRequestToApi(100, 20);

    // Vérification que console.log a été appelé une seule fois avec le message correct
    expect(spy.calledOnceWithExactly('The total is: 120')).to.be.true;

    // Restaurer la méthode originale de Utils.calculateNumber après le test
    Utils.calculateNumber.restore();
  });

  // Test pour vérifier que le message correct est
  // affiché lorsque la fonction est appelée avec 10 et 10
  it('should log the correct message when called with 10 and 10', () => {
    // Stub de la méthode Utils.calculateNumber pour retourner 20
    // Ceci remplace la méthode originale pour cette instance de test
    sinon.stub(Utils, 'calculateNumber').returns(20);

    // Appel de la fonction sendPaymentRequestToApi avec des arguments de test
    sendPaymentRequestToApi(10, 10);

    // Vérification que console.log a été appelé une seule fois avec le message correct
    expect(spy.calledOnceWithExactly('The total is: 20')).to.be.true;

    // Restaurer la méthode originale de Utils.calculateNumber après le test
    Utils.calculateNumber.restore();
  });
});
