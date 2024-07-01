/**
 * Autor SAID LAMGHARI
 * Crée une chaîne de caractères à partir des valeurs d'un ensemble (Set)
 * qui commencent par une chaîne de caractères spécifique (startString).
 *
 * @param {Set} set - L'ensemble (Set) à nettoyer.
 * @param {string} startString - La chaîne de caractères de début à utiliser.
 * @returns {string} - La chaîne de caractères nettoyée.
 */
export default function cleanSet(set, startString) {
  // Vérifier si startString est une chaîne de caractères vide
  if (!startString) {
    return '';
  }

  // Créer un tableau pour stocker les résultats
  const clnedValues = [];

  // Parcourir chaque valeur de l'ensemble
  for (const value of set) {
    // Vérifier si la valeur commence par startString
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Si oui, extraire le reste de la chaîne de caractères et l'ajouter au tableau
      clnedValues.push(value.slice(startString.length));
    }
  }

  // Joindre les éléments du tableau avec un tiret "-"
  // retourner la chaîne de caractères résultante
  return clnedValues.join('-');
}
