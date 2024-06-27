// Autor SAID LAMGHARI
// Définition de la classe HolbertonClass
export class HolbertonClass {
  constructor(year, location) {
    this._year = year; // Année de la classe
    this._location = location; // Lieu de la classe
    this._students = []; // Tableau vide pour stocker les étudiants
  }

  // Méthode pour ajouter un étudiant à la classe
  addStudent(student) {
    this._students.push(student); // Ajoute l'étudiant à la liste des étudiants de la classe
  }

  // Getter pour récupérer l'année de la classe
  get year() {
    return this._year;
  }

  // Getter pour récupérer le lieu de la classe
  get location() {
    return this._location;
  }

  // Getter pour récupérer la liste des étudiants de la classe
  get students() {
    return this._students;
  }
}

// Définition de la classe StudentHolberton
export class StudentHolberton {
  constructor(firstName, lastName) {
    this._firstName = firstName; // Prénom de l'étudiant
    this._lastName = lastName; // Nom de famille de l'étudiant
    // Initialise à null, l'étudiant n'est pas encore assigné à une classe
    this._holbertonClass = null;
  }

  // Méthode pour assigner l'étudiant à une classe
  assignToClass(holbertonClass) {
    this._holbertonClass = holbertonClass; // Assigne la classe à l'étudiant
    holbertonClass.addStudent(this); // Ajoute cet étudiant à la liste des étudiants de la classe
  }

  // Getter pour récupérer le nom complet de l'étudiant
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Getter pour récupérer la description complète de l'étudiant,
  // incluant l'année et le lieu de la classe
  get fullStudentDescription() {
    if (!this._holbertonClass) {
      return `${this.fullName} - Pas assigné à une classe`;
    }
    return `${this.fullName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Instances de classes Holberton
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Instances d'étudiants Holberton
const student1 = new StudentHolberton('Guillaume', 'Salva');
const student2 = new StudentHolberton('John', 'Doe');
const student3 = new StudentHolberton('Albert', 'Clinton');
const student4 = new StudentHolberton('Donald', 'Bush');
const student5 = new StudentHolberton('Jason', 'Sandler');

// Assignation des étudiants à leurs classes respectives
student1.assignToClass(class2020);
student2.assignToClass(class2020);
student3.assignToClass(class2019);
student4.assignToClass(class2019);
student5.assignToClass(class2019);

// Liste des étudiants
const listOfStudents = [student1, student2, student3, student4, student5];

// Exportation de la liste des étudiants par défaut
export default listOfStudents;
