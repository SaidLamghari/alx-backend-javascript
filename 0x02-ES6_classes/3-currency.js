// Autor SAID LAMGHARI
// Définition de la classe Currency
export default class Currency {
  // Constructeur avec les attributs : code (String), name (String)
  constructor(code, name) {
    // Stockage des attributs avec un underscore préfixé
    this.code = code; // Code de la devise (ex: '$')
    this.name = name; // Nom de la devise (ex: 'Dollars')
  }

  // Getter pour l'attribut code
  get code() {
    return this._code;
  }

  // Setter pour l'attribut code
  set code(nwCode) {
    this._code = nwCode;
  }

  // Getter pour l'attribut name
  get name() {
    return this._name;
  }

  // Setter pour l'attribut name
  set name(nwName) {
    this._name = nwName;
  }

  // Méthode pour afficher les attributs dans un format spécifié
  displayFullCurrency() {
    return `${this._name} (${this._code})`; // Format: nom (code)
  }
}
