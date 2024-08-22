// 2-calcul_chai.test.js

// Importer le module 'chai' et l'utiliser pour les assertions
const chai = require('chai');
const expect = chai.expect;
// Importer la fonction calculateNumber depuis le fichier 2-calcul_chai.js
const calculateNumber = require('./2-calcul_chai');

// Décrire le groupe de tests pour la fonction calculateNumber
describe('calculateNumber', function() {
    // Test pour l'opération SUM
    describe('SUM', function() {
        it('should return 6 when summing 1.4 and 4.5', function() {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
    });

    // Test pour l'opération SUBTRACT
    describe('SUBTRACT', function() {
        it('should return -4 when subtracting 4.5 from 1.4', function() {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
    });

    // Test pour l'opération DIVIDE
    describe('DIVIDE', function() {
        it('should return 0.2 when dividing 1.4 by 4.5', function() {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('should return "Error" when dividing 1.4 by 0', function() {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });

    // Test pour un type d'opération invalide
    describe('Invalid Type', function() {
        it('should throw an error for invalid operation type', function() {
            expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw('Invalid type');
        });
    });
});
