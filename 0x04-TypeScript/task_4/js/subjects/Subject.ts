// Implémentation de la classe Subject dans le namespace Subjects
namespace Subjects {
  export class Subject {
    private _teacher: Teacher | null = null;

    // Setter pour définir l'enseignant
    setTeacher(teacher: Teacher) {
      this._teacher = teacher;
    }

    // Méthode pour obtenir les exigences spécifiques à la matière
    getRequirements(): string {
      return `Here is the list of requirements for ${this.constructor.name}`;
    }

    // Méthode pour obtenir l'enseignant disponible
    getAvailableTeacher(): string {
      if (this._teacher?.experienceTeachingC !== undefined) {
        return `Available Teacher: ${this._teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}
