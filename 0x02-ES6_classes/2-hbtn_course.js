// Autor SAID LAMGHARI
// Définition de la classe HolbertonCourse
export default class HolbertonCourse {
  // Constructeur avec les attributs : name (String), length (Number), students (Array de Strings)
  constructor(name, length, students) {
    // Vérification des types des attributs et assignation aux attributs avec underscore
    this._name = typeof name === 'string' ? name : (() => { throw new TypeError('Name must be a string'); })();
    this._length = typeof length === 'number' ? length : (() => { throw new TypeError('Length must be a number'); })();
    this._students = Array.isArray(students) ? students : (() => { throw new TypeError('Students must be an array of strings'); })();

    // Définition des getters et setters pour chaque attribut
    Object.defineProperty(this, 'name', {
      // Rend l'attribut name visible lors de l'itération sur les propriétés de l'objet
      enumerable: true,
      get() {
        return this._name; // Getter pour retourner la valeur de _name
      },
      set(newName) {
        // Setter pour vérifier et assigner la nouvelle valeur de name
        if (typeof newName === 'string') {
          this._name = newName;
        } else {
          throw new TypeError('Name must be a string');
        }
      },
    });

    Object.defineProperty(this, 'length', {
      enumerable: true,
      get() {
        return this._length;
      },
      set(newLength) {
        // Setter pour vérifier et assigner la nouvelle valeur de length
        if (typeof newLength === 'number') {
          this._length = newLength;
        } else {
          throw new TypeError('Length must be a number');
        }
      },
    });

    Object.defineProperty(this, 'students', {
      enumerable: true,
      get() {
        return this._students;
      },
      set(newStudents) {
        // Setter pour vérifier et assigner la nouvelle valeur de students
        if (Array.isArray(newStudents) && newStudents.every((student) => typeof student === 'string')) {
          this._students = newStudents;
        } else {
          throw new TypeError('Students must be an array of strings');
        }
      },
    });
  }
}
