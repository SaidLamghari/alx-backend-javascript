// Ajout de l'attribut experienceTeachingC à l'interface Teacher
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number; // Expérience d'enseignement de C (optionnel)
  }

  // Classe Cpp étendant Subject
  export class Cpp extends Subject {
    getRequirements(): string {
      return super.getRequirements() + ' for C++';
    }
  }
}
