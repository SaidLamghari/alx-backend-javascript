// Autor SAID LAMGHARI
// Définition de la classe Building
class Building {
  // Constructeur de la classe Building, prenant en paramètre la superficie (sqft) du bâtiment
  constructor(sqft) {
    // Initialisation du champ privé _sqft avec la valeur passée en paramètre
    this._sqft = sqft;

    // Vérification si l'instance n'est pas directement
    // une instance de Building (c'est-à-dire une sous-classe)
    if (new.target !== Building) {
      // Vérification si la sous-classe a surchargé la méthode evacuationWarningMessage
      if (typeof this.evacuationWarningMessage !== 'function') {
        // Lancer une erreur si evacuationWarningMessage n'est pas surchargée
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  // Getter pour la propriété sqft
  get sqft() {
    return this._sqft;
  }

  // Setter pour la propriété sqft
  set sqft(value) {
    this._sqft = value;
  }
}

// Exportée
export default Building;
