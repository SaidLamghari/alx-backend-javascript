/**
 * Autor SAID LAMGHARI
 * Crée un nouvel ArrayBuffer avec une valeur Int8 à une position spécifique.
 * @param {number} length - La longueur de l'ArrayBuffer.
 * @param {number} position - La position où la valeur Int8 doit être définie.
 * @param {number} value - La valeur à définir à la position spécifiée.
 * @returns {DataView} - Une nouvelle instance de DataView de l'ArrayBuffer avec la valeur définie.
 * @throws {Error} - Si la position est en dehors de la plage de l'ArrayBuffer.
 */
export default function createInt8TypedArray(length, position, value) {
  // Créer un nouvel ArrayBuffer avec la longueur spécifiée
  const bffer = new ArrayBuffer(length);
  // Créer une nouvelle instance de DataView de cet ArrayBuffer
  const view = new DataView(bffer);

  // Vérifier si la position est dans la plage de l'ArrayBuffer
  if (position < 0 || position >= length) {
    // Si la position est en dehors de la plage, lever une erreur
    throw new Error('Position outside range');
  }

  // Définir la valeur Int8 à la position spécifiée dans la DataView
  view.setInt8(position, value);

  // Retourner la DataView avec la valeur définie
  return view;
}
