// Autor SAID LAMGHARI
// 100-createIteratorObject.js
// Fonction exportée qui crée un objet itérateur à partir du rapport des employés
export default function createIteratorObject(report) {
  // Récupère un tableau des départements à partir de tous les employés du rapport
  const departments = Object.values(report.allEmployees);

  // Index actuel du département en cours
  let currentDeptIndex = 0;

  // Index actuel de l'employé dans le département en cours
  let currentEmpIndex = 0;

  // Retourne un objet avec une méthode next() pour itérer sur les employés
  return {
    next() {
      // Vérifie s'il y a d'autres départements à itérer
      if (currentDeptIndex < departments.length) {
        // Obtient le tableau des employés du département actuel
        const employees = departments[currentDeptIndex];

        // Vérifie s'il y a d'autres employés dans le département actuel
        if (currentEmpIndex < employees.length) {
          const nextEmployee = employees[currentEmpIndex];
          currentEmpIndex += 1; // Incrementation séparée
          // Retourne le prochain employé et passe à l'index suivant
          return { value: nextEmployee, done: false };
        }
        // Réinitialise l'index des employés et passe au département suivant
        currentEmpIndex = 0;
        currentDeptIndex += 1;
        return this.next(); // Appel récursif de next() pour le département suivant
      }
      // Plus de départements à itérer
      return { done: true };
    },
    // Méthode spéciale pour rendre l'objet itérable
    [Symbol.iterator]() {
      return this;
    },
  };
}
