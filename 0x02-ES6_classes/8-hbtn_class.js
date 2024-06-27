// Autor SAID LAMGHARI
// Définition de la classe HolbertonClass
export default class HolbertonClass {
  // Constructeur de la classe HolbertonClass
  // @param {number} size - Taille de la classe
  // @param {string} location - Localisation de la classe
  constructor(size, location) {
    this._size = size; // Initialisation de la taille de la classe
    this._location = location; // Initialisation de la localisation de la classe
  }

  // Méthode valueOf qui retourne la taille de la classe
  // @returns {number} Taille de la classe
  valueOf() {
    return this._size;
  }

  // Méthode toString qui retourne la localisation de la classe
  // @returns {string} Localisation de la classe
  toString() {
    return this._location;
  }
}
