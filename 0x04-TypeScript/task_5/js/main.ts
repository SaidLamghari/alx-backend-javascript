// Importation des sujets et de l'interface
// Teacher depuis leurs fichiers respectifs
import { Subjects } from './subjects';

// Création d'une instance pour chaque sujet
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Création d'un enseignant pour C avec une expérience en C
export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10
};

// Tests pour Cpp
cpp.setTeacher(cTeacher);
console.log('Cpp:');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Tests pour Java
java.setTeacher(cTeacher);
console.log('Java:');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Tests pour React
react.setTeacher(cTeacher);
console.log('React:');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
