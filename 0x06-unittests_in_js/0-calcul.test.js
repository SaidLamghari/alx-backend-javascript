// 0-calcul.test.js

// Importer le module 'assert' pour effectuer des assertions dans les tests
const assert = require('assert');
// Importer la fonction calculateNumber depuis le fichier 0-calcul.js
const calculateNumber = require('./0-calcul');

// Décrire le groupe de tests pour la fonction calculateNumber
describe('calculateNumber', () => {
  // Test pour vérifier que l'ajout de 1 et 3 retourne 4
  it('should return 4 when adding 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  // Test pour vérifier que l'ajout de 1 et 3.7 retourne 5
  it('should return 5 when adding 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  // Test pour vérifier que l'ajout de 1.2 et 3.7 retourne 5
  it('should return 5 when adding 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  // Test pour vérifier que l'ajout de 1.5 et 3.7 retourne 6
  it('should return 6 when adding 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Cas de test supplémentaire pour vérifier l'ajout de 0 et 0
  it('should return 0 when adding 0 and 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  // Cas de test supplémentaire pour vérifier l'ajout de -0.5 et -0.6
  it('should return -1 when adding -0.5 and -0.6', () => {
    assert.strictEqual(calculateNumber(-0.5, -0.6), -1);
  });

  // Cas de test supplémentaire pour vérifier l'ajout de -0.5 et 0.4
  it('should return 0 when adding -0.5 and 0.4', () => {
    assert.strictEqual(calculateNumber(-0.5, 0.4), 0);
  });
});
