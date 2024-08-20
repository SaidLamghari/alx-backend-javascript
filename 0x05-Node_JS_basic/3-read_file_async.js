const fs = require('fs').promises;

/**
 * Compte les étudiants dans un fichier CSV de données de manière asynchrone.
 *
 * Le fichier CSV doit avoir la première ligne comme en-tête avec les colonnes suivantes :
 * - La dernière colonne doit être 'field' (le domaine d'étude de l'étudiant).
 * - Les autres colonnes sont considérées comme les propriétés
 * des étudiants (par exemple, 'firstname', 'lastname').
 *
 * @param {string} dtpth - Le chemin vers le fichier CSV contenant les données des étudiants.
 * @returns {Promise} Une promesse qui se résout quand le traitement est terminé.
 * @throws {Error} Lance une erreur avec le message 'Cannot load the database'
 * si le fichier n'existe pas ou n'est pas un fichier valide.
 *
 * @example
 * countStudents("database.csv")
 *   .then(() => {
 *     console.log("Done!");
 *   })
 *   .catch((error) => {
 *     console.log(error);
 *   });
 */
const countStudents = async (dtpth) => {
  try {
    // Lire le fichier CSV de manière asynchrone
    const data = await fs.readFile(dtpth, 'utf-8');

    // Diviser le fichier en lignes
    const LgnesFichiers = data.trim().split('\n');

    // Initialiser un objet pour stocker les groupes d'étudiants par domaine
    const studentGps = {};

    // Extraire les noms de colonnes de l'en-tête
    const dbFeld = LgnesFichiers[0].split(',');
    const studentNmes = dbFeld.slice(0, dbFeld.length - 1);

    // Traiter chaque ligne d'étudiant (à partir de la ligne 1)
    for (const line of LgnesFichiers.slice(1)) {
      if (line.trim() !== '') {
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
