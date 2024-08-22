// 1-calcul.test.js
// Auteur SAID LAMGHARI

// Importer le module 'assert' pour effectuer des assertions dans les tests
const assert = require('assert');
// Importer la fonction calculateNumber depuis le fichier 1-calcul.js
const calculateNumber = require('./1-calcul');

// Décrire le groupe de tests pour la fonction calculateNumber
describe('calculateNumber', function() {
    // Test pour l'opération SUM
    describe('SUM', function() {
        it('should return 6 when summing 1.4 and 4.5', function() {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });
    });

    // Test pour l'opération SUBTRACT
    describe('SUBTRACT', function() {
        it('should return -4 when subtracting 4.5 from 1.4', function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
    });

    // Test pour l'opération DIVIDE
    describe('DIVIDE', function() {
        it('should return 0.2 when dividing 1.4 by 4.5', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return "Error" when dividing 1.4 by 0', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });

    // Test pour un type d'opération invalide
    describe('Invalid Type', function() {
        it('should throw an error for invalid operation type', function() {
            assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), {
                name: 'Error',
                message: 'Invalid type'
            });
        });
    });
});
