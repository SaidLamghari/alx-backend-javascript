// Autor SAID LAMGHARI
// Définition de la classe HolbertonClass
class HolbertonClass {
  // Constructeur de la classe HolbertonClass
  // @param {number} year - Année de la classe
  // @param {string} location - Localisation de la classe
  constructor(year, location) {
    this._year = year; // Initialisation de l'année de la classe
    this._location = location; // Initialisation de la localisation de la classe
  }

  // Getter pour obtenir l'année de la classe
  get year() {
    return this._year;
  }

  // Getter pour obtenir la localisation de la classe
  get location() {
    return this._location;
  }
}

// Définition de la classe StudentHolberton
class StudentHolberton {
  // Constructeur de la classe StudentHolberton
  // @param {string} firstName - Prénom de l'étudiant
  // @param {string} lastName - Nom de l'étudiant
  // @param {HolbertonClass} holbertonClass - Instance de
  // la classe Holberton à laquelle l'étudiant appartient
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName; // Initialisation du prénom de l'étudiant
    this._lastName = lastName; // Initialisation du nom de l'étudiant
    // Initialisation de l'instance de la classe Holberton à laquelle l'étudiant appartient
    this._holbertonClass = holbertonClass;
  }

  // Getter pour obtenir le nom complet de l'étudiant
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Getter pour obtenir l'instance de la classe Holberton à laquelle l'étudiant appartient
  get holbertonClass() {
    return this._holbertonClass;
  }

  // Getter pour obtenir une description complète de
  // l'étudiant (prénom, nom, année de la classe, localisation de la classe)
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Instances de différentes classes Holberton et étudiants
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Exportation des classes et de la liste des étudiants
export const listOfStudents = [student1, student2, student3, student4, student5];
export { HolbertonClass, StudentHolberton };
