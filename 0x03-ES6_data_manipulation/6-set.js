/**
 * Autor SAID LAMGHARI
 * Crée un nouvel objet Set à partir d'un tableau.
 * @param {Array} array - Le tableau à convertir en Set.
 * @returns {Set} - Un nouvel objet Set créé à partir du tableau en entrée.
 */
export default function setFromArray(array) {
  // Explication détaillée de la fonction :

  // L'objectif de cette fonction est de prendre un tableau en entrée
  // et de retourner un nouvel objet Set contenant les éléments uniques de ce tableau.

  // Pour cela, nous utilisons le constructeur `new Set()` qui crée un objet Set.
  // Lorsqu'on passe un tableau en argument de ce constructeur, la Set
  // sera automatiquement créée avec les éléments uniques du tableau.

  // Ainsi, lorsqu'on appelle `new Set(array)`, un nouvel objet Set est créé
  // et chaque élément unique du tableau `array` est ajouté à cette Set.

  // La fonction retourne finalement cet objet Set nouvellement créé,
  // qui contient les éléments uniques du tableau d'entrée.
  return new Set(array);
}
