/**
 * Autor SAID LAMGHARI
 * Met à jour la quantité de tous les articles avec une quantité initiale de 1 à 100.
 *
 * @param {Map} mp - Une carte de produits d'épicerie.
 * @returns {Map} - La carte mise à jour.
 * @throws {Error} - Si l'argument n'est pas une carte.
 */
export default function updateUniqueItems(mp) {
  // Vérifier si l'argument est une carte
  if (!(mp instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Parcourir la carte et mettre à jour les quantités à 1
  for (const [item, quantity] of mp) {
    if (quantity === 1) {
      mp.set(item, 100);
    }
  }

  // Retourner la carte mise à jour
  return mp;
}
