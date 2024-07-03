// Interface pour Teacher
interface Teacher {
    readonly firstName: string; // Prénom en lecture seule
    readonly lastName: string; // Nom en lecture seule
    fullTimeEmployee: boolean; // Employé à temps plein (doit être défini)
    yearsOfExperience?: number; // Années d'expérience (optionnel)
    location: string; // Lieu (doit être défini)
    [propName: string]: any; // Permet des propriétés dynamiques
}

// Exemple d'objet Teacher
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false, // Exemple de propriété dynamique
};

console.log(teacher3);

// Interface pour Director qui étend Teacher
interface Director extends Teacher {
    numberOfReports: number; // Nombre de rapports
}

// Exemple d'objet Director
const director1: Director = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'London',
    numberOfReports: 17,
};

console.log(director1);

// Interface pour la fonction printTeacher
interface PrintTeacherFunction {
    (firstName: string, lastName: string): string; // Fonction prenant firstName et lastName et retournant une chaîne de caractères
}

// Fonction pour imprimer les détails de l'enseignant
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`; // Format du nom avec première lettre du prénom et nom complet
};

console.log(printTeacher('John', 'Doe')); // Sortie : J. Doe

// Interface pour le constructeur de StudentClass
interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClass; // Constructeur prenant firstName et lastName
}

// Interface pour les méthodes de StudentClass
interface StudentClass {
    workOnHomework(): string; // Méthode de travail sur les devoirs
    displayName(): string; // Méthode pour afficher le prénom de l'étudiant
}

// Implémentation de StudentClass
class StudentClass implements StudentClass {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework() {
        return 'Currently working'; // Retourne une chaîne indiquant que l'étudiant travaille actuellement
    }

    displayName() {
        return this.firstName; // Retourne le prénom de l'étudiant
    }
}

// Exemple d'utilisation de StudentClass
const studentInstance = new StudentClass('Alice', 'Smith');
console.log(studentInstance.workOnHomework()); // Sortie : Currently working
console.log(studentInstance.displayName()); // Sortie : Alice
