// Autor SAID LAMGHARI
// Importation de la classe Building depuis le fichier 5-building.js
import Building from './5-building';

// Définition de la classe SkyHighBuilding qui étend la classe Building
export default class SkyHighBuilding extends Building {
  // Constructeur de la classe SkyHighBuilding
  // @param {number} sqft - Superficie en pieds carrés
  // @param {number} floors - Nombre d'étages
  constructor(sqft, floors) {
    super(sqft); // Appel du constructeur de la classe parent Building avec la superficie

    this._floors = floors; // Initialisation du nombre d'étages
  }

  // Méthode getter pour obtenir le nombre d'étages
  // @returns {number} Le nombre d'étages du bâtiment
  get floors() {
    return this._floors;
  }

  // test
  set floors(vl) {
    this._floors = vl;
  }

  // Méthode pour générer un message d'avertissement d'évacuation
  // @returns {string} Message d'avertissement d'évacuation
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`; // Message avec le nombre d'étages
  }
}
