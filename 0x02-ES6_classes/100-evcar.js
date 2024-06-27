// Autor Said LAMGHARI
// Importer la classe parente Car depuis le fichier './10-car.js'
import Car from './10-car';

// Exporter la classe enfant EVCar qui hérite de Car
export default class EVCar extends Car {
  // Constructeur de la classe EVCar, qui prend en plus un paramètre 'range'
  constructor(brand, motor, color, range) {
    // Appeler le constructeur de la classe parente Car avec 'super'
    super(brand, motor, color);

    // Initialiser le champ spécifique à EVCar, '_range', avec la valeur passée en paramètre
    this._range = range;
  }

  // Méthode pour cloner une instance de EVCar
  cloneCar() {
    // Créer et retourner une nouvelle instance de la classe parente Car
    const Car = super.constructor[Symbol.species];
    // Note : Cette méthode ne reproduit pas le comportement attendu pour cloner une EVCar
    return new Car();
  }
}
