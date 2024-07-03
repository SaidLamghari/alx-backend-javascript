// Ajout de l'attribut experienceTeachingJava à l'interface Teacher
namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number; // Expérience d'enseignement de Java (optionnel)
  }

  // Classe Java étendant Subject
  export class Java extends Subject {
    getRequirements(): string {
      return super.getRequirements() + ' for Java';
    }
  }
}
