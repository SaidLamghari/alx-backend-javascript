/**
 * Autor SAID LAMGHARI
 * Crée et retourne une carte (Map) de produits d'épicerie avec leur quantité.
 *
 * @returns {Map} - Une carte de produits d'épicerie.
 */
export default function groceriesList() {
  // Créer une nouvelle carte
  const grceries = new Map();

  // Ajouter les articles à la carte
  grceries.set('Apples', 10);
  grceries.set('Tomatoes', 10);
  grceries.set('Pasta', 1);
  grceries.set('Rice', 1);
  grceries.set('Banana', 5);

  // Retourner la carte
  return grceries;
}
