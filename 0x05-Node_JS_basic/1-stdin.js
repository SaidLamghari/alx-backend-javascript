// Importation du module 'readline' qui permet de gérer les flux d'entrée et de sortie.
// Ce module fournit une interface pour lire des lignes d'entrée depuis un flux de lecture.
const readline = require('readline');

// Création d'une interface readline pour lire l'entrée depuis stdin (entrée standard)
// et écrire les sorties sur stdout (sortie standard).
const rl = readline.createInterface({
  input: process.stdin, // Définir le flux d'entrée comme stdin (entrée standard du terminal)
  output: process.stdout, // Définir le flux de sortie comme stdout (sortie standard du terminal)
});

// Afficher le message de bienvenue et demander le nom de l'utilisateur
console.log('Welcome to Holberton School, what is your name?');

// Écouter l'événement 'line' qui est émis lorsque l'utilisateur saisit une ligne de texte.
// Le paramètre 'input' contient la ligne de texte saisie par l'utilisateur.
rl.on('line', (input) => {
  // Afficher le nom de l'utilisateur en utilisant le texte saisi
  console.log(`Your name is: ${input}`);

  // Afficher un message indiquant que le logiciel se ferme
  console.log('This important software is now closing');

  // Fermer l'interface readline. Cela termine le programme et libère les ressources.
  rl.close();
});
