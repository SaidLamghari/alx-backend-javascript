/**
 * Autor SAID LAMGHARI
 * Vérifie si tous les éléments du tableau donné existent dans l'ensemble (Set).
 * @param {Set} set - L'ensemble (Set) à vérifier.
 * @param {Array} array - Le tableau d'éléments à vérifier.
 * @returns {boolean} - True si tous les éléments du tableau existent dans l'ensemble, false sinon.
 */
export default function hasValuesFromArray(set, array) {
  // Explication détaillée de la fonction :

  // L'objectif de cette fonction est de vérifier si tous les éléments
  // du tableau `array` sont présents dans l'ensemble `set`.

  // Pour cela, nous utilisons la méthode `every()` du tableau, qui permet
  // de vérifier si tous les éléments du tableau passent un test donné.

  // Le test que nous utilisons ici est `(element) => set.has(element)`,
  // qui vérifie si chaque élément `element` du tableau `array` est présent
  // dans l'ensemble `set` en utilisant la méthode `set.has(element)`.

  // Si tous les éléments du tableau `array` sont présents dans l'ensemble `set`,
  // alors la méthode `every()` retournera `true`. Sinon, elle retournera `false`.

  // Enfin, la fonction retourne directement le résultat de la méthode `every()`,
  // qui correspond à la valeur booléenne finale.
  return array.every((element) => set.has(element));
}
