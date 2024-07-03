// Ajout de l'attribut experienceTeachingReact à l'interface Teacher
namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number; // Expérience d'enseignement de React (optionnel)
  }

  // Classe React étendant Subject
  export class React extends Subject {
    getRequirements(): string {
      return super.getRequirements() + ' for React';
    }
  }
}
