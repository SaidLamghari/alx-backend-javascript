// 3-payment.test.js
// Auteur SAID LAMGHARI

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
    it('should call Utils.calculateNumber with SUM type and correct arguments', function() {
        // Créer un espion pour Utils.calculateNumber
        const spy = sinon.spy(Utils, 'calculateNumber');

        // Appeler la fonction sendPaymentRequestToApi
        sendPaymentRequestToApi(100, 20);

        // Vérifier que l'espion a été appelé avec les bons arguments
        expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

        // Restaurer la méthode originale
        spy.restore();
    });
});
