// Interfaces pour les rôles de Directeur et d'Enseignant

// Interface DirectorInterface pour les méthodes spécifiques au Directeur
interface DirectorInterface {
  workFromHome(): string; // Méthode pour travailler depuis la maison
  getCoffeeBreak(): string; // Méthode pour prendre une pause café
  workDirectorTasks(): string; // Méthode pour effectuer les tâches de directeur
}

// Interface TeacherInterface pour les méthodes spécifiques à l'Enseignant
interface TeacherInterface {
  workFromHome(): string; // Méthode pour travailler depuis la maison
  getCoffeeBreak(): string; // Méthode pour prendre une pause café
  workTeacherTasks(): string; // Méthode pour effectuer les tâches d'enseignant
}

// Classe Director implémentant DirectorInterface

class Director implements DirectorInterface {
  workFromHome() {
      return 'Working from home'; // Implémentation spécifique pour le directeur
  }

  getCoffeeBreak() {
      return 'Getting a coffee break'; // Implémentation spécifique pour le directeur
  }

  workDirectorTasks() {
      return 'Getting to director tasks'; // Implémentation spécifique pour le directeur
  }
}

// Classe Teacher implémentant TeacherInterface

class Teacher implements TeacherInterface {
  workFromHome() {
      return 'Cannot work from home'; // Implémentation spécifique pour l'enseignant
  }

  getCoffeeBreak() {
      return 'Cannot have a break'; // Implémentation spécifique pour l'enseignant
  }

  workTeacherTasks() {
      return 'Getting to work'; // Implémentation spécifique pour l'enseignant
  }
}

// Fonction createEmployee pour créer une instance de Directeur ou d'Enseignant en fonction du salaire

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
      return new Teacher(); // Retourne un enseignant si le salaire est un nombre et inférieur à 500
  } else {
      return new Director(); // Sinon, retourne un directeur
  }
}

// Fonction isDirector comme prédicat de type pour vérifier si un employé est un Directeur

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Fonction executeWork pour exécuter les tâches spécifiques en fonction du type d'employé

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
      return employee.workDirectorTasks(); // Exécute les tâches de directeur si l'employé est un directeur
  } else {
      return employee.workTeacherTasks(); // Exécute les tâches d'enseignant si l'employé est un enseignant
  }
}

// Type de chaîne littérale pour les matières

type Subjects = 'Math' | 'History'; // Définit un type de chaîne littérale pour les matières 'Math' et 'History'

// Fonction teachClass pour enseigner une matière spécifique

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
      return 'Teaching Math'; // Enseigne les mathématiques si todayClass est 'Math'
  } else if (todayClass === 'History') {
      return 'Teaching History'; // Enseigne l'histoire si todayClass est 'History'
  } else {
      throw new Error('Invalid class type'); // Lance une erreur si todayClass n'est ni 'Math' ni 'History'
  }
}

// Tests des fonctions et méthodes

// Test de la fonction createEmployee
console.log(createEmployee(200)); // Output: Teacher (Enseignant)
console.log(createEmployee(1000)); // Output: Director (Directeur)
console.log(createEmployee('$500')); // Output: Director (Directeur)

// Test de la fonction executeWork
console.log(executeWork(createEmployee(200))); // Output: Commencer à travailler
console.log(executeWork(createEmployee(1000))); // Output: Effectuer les tâches de directeur

// Test de la fonction teachClass
console.log(teachClass('Math')); // Output: Enseignement des mathématiques
console.log(teachClass('History')); // Output: Enseignement de l'histoire
