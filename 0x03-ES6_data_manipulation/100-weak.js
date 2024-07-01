// Autor SAID LAMGHARI
// 100-weak.js

// Exporter une instance constante de WeakMap et la nommer weakMap
export const weakMap = new WeakMap();

/**
 * Exécute une requête sur une API et vérifie le nombre
 * de requêtes effectuées pour l'endpt donné.
 *
 * @param {Object} endpt - L'objet endpt à interroger.
 * @param {string} endpt.protocol - Le protocole de l'endpt.
 * @param {string} endpt.name - Le nom de l'endpt.
 * @throws {Error} - Si le nombre de requêtes pour l'endpt est supérieur ou égal à 5.
 */
export function queryAPI(endpt) {
  // Vérifier si l'endpt est déjà suivi dans le weakMap
  if (weakMap.has(endpt)) {
    // Récupérer le nombre actuel de requêtes pour cet endpt
    const queryCount = weakMap.get(endpt);

    // Incrémenter le nombre de requêtes
    weakMap.set(endpt, queryCount + 1);

    // Vérifier si le nombre de requêtes est supérieur ou égal à 5
    if (queryCount + 1 >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    // Si l'endpt n'est pas suivi, initialiser le nombre de requêtes à 1
    weakMap.set(endpt, 1);
  }
}
