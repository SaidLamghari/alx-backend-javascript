// Autor : SAID LAMGHARI
// Définition de la classe Airport
export default class Airport {
  // Constructeur de la classe Airport
  // @param {string} name - Nom de l'aéroport
  // @param {string} code - Code de l'aéroport
  constructor(name, code) {
    this._name = name; // Initialisation du nom de l'aéroport
    this._code = code; // Initialisation du code de l'aéroport
  }

  // Méthode toString qui retourne une représentation sous forme de chaîne de caractères de l'objet
  // @returns {string} Représentation de l'objet sous forme de chaîne de caractères
  toString() {
    return `[object ${this._code}]`; // Retourne une chaîne de caractères formatée avec le code de l'aéroport
  }
}
