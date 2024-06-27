// Autor SAID LAMGHARI
// Définir des symboles pour les champs privés
const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

// Exporter la classe par défaut
export default class Car {
  // Constructeur de la classe Car
  constructor(brand, motor, color) {
    // Initialisation des champs privés avec les valeurs passées en paramètres
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  // Méthode pour cloner une instance de voiture
  cloneCar() {
    // Accéder aux champs privés en utilisant les symboles
    const brand = this[_brand];
    const motor = this[_motor];
    const color = this[_color];

    // Créer une nouvelle instance du même type de voiture avec les mêmes valeurs
    return new this.constructor(brand, motor, color);
  }
}
