// Autor SAID LAMGHARI
export default class Car {
  constructor(brand, motor, color) {
    // Initialisation des propriétés publiques à l'aide des paramètres du constructeur
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  // Getter et Setter pour la propriété 'brand' à l'aide des champs privés
  get brand() {
    return this._brand; // Retourne la valeur du champ privé _brand
  }

  set brand(vl) {
    this._brand = vl; // Définit la valeur du champ privé _brand avec la valeur passée
  }

  // Getter et Setter pour la propriété 'motor' à l'aide des champs privés
  get motor() {
    return this._motor; // Retourne la valeur du champ privé _motor
  }

  set motor(vl) {
    this._motor = vl; // Définit la valeur du champ privé _motor avec la valeur passée
  }

  // Getter et Setter pour la propriété 'color' à l'aide des champs privés
  get color() {
    return this._color; // Retourne la valeur du champ privé _color
  }

  set color(vl) {
    this._color = vl; // Définit la valeur du champ privé _color avec la valeur passée
  }

  // Définition d'une propriété statique Symbol.species pour la classe Car
  static get [Symbol.species]() {
    return this; // Retourne la classe elle-même (Car) pour indiquer le type par défaut
  }

  // Méthode pour cloner une instance de Car
  cloneCar() {
    // Récupère le constructeur de la classe actuelle à partir de Symbol.species
    const Cars = this.constructor[Symbol.species];

    // Crée et retourne une nouvelle instance de
    // la classe spécifiée par Symbol.species (par défaut, la classe Car)
    return new Cars();
  }
}
