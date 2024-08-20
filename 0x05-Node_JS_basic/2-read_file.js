const fs = require('fs');

/**
 * Compte les étudiants dans un fichier CSV de données.
 *
 * Le fichier CSV doit avoir la première ligne comme en-tête avec les colonnes suivantes :
 * - La dernière colonne doit être 'field' (le domaine d'étude de l'étudiant).
 * - Les autres colonnes sont considérées comme les propriétés
 * des étudiants (par exemple, 'firstname', 'lastname').
 *
 * @param {string} dtpth - Le chemin vers le fichier CSV contenant les données des étudiants.
 * @throws {Error} Lance une erreur avec le message 'Cannot load the database'
 * si le fichier n'existe pas ou n'est pas un fichier valide.
 *
 * @example
 * countStudents("database.csv");
 * // Affiche :
 * // Number of students: 10
 * // Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
 * // Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
 */
const countStudents = (dtpth) => {
  // Vérifier si le fichier existe
  if (!fs.existsSync(dtpth)) {
    throw new Error('Cannot load the database');
  }

  // Vérifier si le chemin correspond à un fichier
  if (!fs.statSync(dtpth).isFile()) {
    throw new Error('Cannot load the database');
  }

  // Lire le fichier CSV et diviser en lignes
  const LgnesFichiers = fs
    .readFileSync(dtpth, 'utf-8')
    .trim()
    .split('\n');

  // Initialiser un objet pour stocker les groupes d'étudiants par domaine
  const studentGps = {};

  // Extraire les noms de colonnes de l'en-tête
  const dbFeld = LgnesFichiers[0].split(',');
  const studentNmes = dbFeld.slice(0, dbFeld.length - 1);

  // Traiter chaque ligne d'étudiant (à partir de la ligne 1)
  for (const line of LgnesFichiers.slice(1)) {
    const dossierEtudiant = line.split(',');

    // Vérifier si le nombre de colonnes correspond
    if (dossierEtudiant.length === dbFeld.length) {
      // Extraire les valeurs des propriétés et le domaine d'étude
      const ValrsEtudiants = dossierEtudiant.slice(0, dossierEtudiant.length - 1);
      const field = dossierEtudiant[dossierEtudiant.length - 1];

      // Initialiser le groupe d'étudiants pour le domaine s'il n'existe pas
      if (!studentGps[field]) {
        studentGps[field] = [];
      }

      // Créer un objet étudiant avec les propriétés
      const studentEntries = studentNmes
        .map((prpNom, vIdex) => [prpNom, ValrsEtudiants[vIdex]]);

      // Ajouter l'objet étudiant au groupe correspondant
      studentGps[field].push(Object.fromEntries(studentEntries));
    } else {
      console.error('Invalid data format in file');
    }
  }

  // Calculer le nombre total d'étudiants
  const ttlStdents = Object
    .values(studentGps)
    .reduce((acc, group) => acc + group.length, 0);

  // Afficher le nombre total d'étudiants
  console.log(`Number of students: ${ttlStdents}`);

  // Afficher le nombre d'étudiants par domaine et la liste des prénoms
  for (const [field, group] of Object.entries(studentGps)) {
    const NomEtudiant = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${NomEtudiant}`);
  }
};

module.exports = countStudents;
