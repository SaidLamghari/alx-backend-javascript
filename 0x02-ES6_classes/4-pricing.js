// Autor SAID LAMGHARI
// Importation de la classe Currency depuis 3-currency.js
import Currency from './3-currency';

// Définition de la classe Pricing
export default class Pricing {
  // Constructeur avec les attributs : amount (Number), currency (Currency)
  constructor(amount, currency) {
    // Initialisation des attributs avec un underscore préfixé pour une encapsulation correcte
    this._amount = amount; // Montant de la transaction
    this._currency = currency; // Objet Currency représentant la devise
  }

  // Getter pour amount
  get amount() {
    return this._amount;
  }

  // Setter pour amount
  set amount(nwAmount) {
    this._amount = nwAmount;
  }

  // Getter pour currency
  get currency() {
    return this._currency;
  }

  // Setter pour currency
  set currency(nwCurrency) {
    if (!(nwCurrency instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = nwCurrency;
  }

  // Méthode pour afficher le prix complet dans un format spécifié
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Méthode statique pour convertir le prix en fonction du taux de conversion
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
