const fs = require('fs');

/**
 * Lit un fichier CSV et compte le nombre d'étudiants, classés par domaine d'étude.
 *
 * Le fichier CSV est attendu au format suivant :
 * - La première ligne est l'en-tête avec des colonnes comprenant 'field' et 'firstname'.
 * - Les lignes suivantes contiennent les données des étudiants avec les champs et noms respectifs.
 *
 * @param {string} dtpth - Le chemin du fichier CSV à lire.
 * @throws {Error} Lance une erreur avec le message 'Cannot load the database'
 * si le fichier ne peut pas être lu
 * ou si les colonnes requises sont manquantes.
 *
 * @example
 * countStudents("database.csv");
 * // Affiche :
 * // Number of students: 10
 * // Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
 * // Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
 */
function countStudents(dtpth) {
  try {
    // Lire le contenu du fichier de manière synchrone
    const data = fs.readFileSync(dtpth, 'utf8');

    // Diviser le contenu du fichier en lignes, en éliminant les lignes vides
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Vérifier si le fichier CSV est vide ou s'il n'a pas de données valides
    if (lines.length < 2) {
      // Si le fichier n'a pas assez de lignes, lancer une erreur
      throw new Error('Cannot load the database');
    }

    // Extraire l'en-tête et les données des étudiants
    const [header, ...students] = lines;

    // Diviser l'en-tête en colonnes pour identifier les indices des champs
    const headers = header.split(',');
    const fieldIndex = headers.indexOf('field');
    const nameIndex = headers.indexOf('firstname');

    // Vérifier que les colonnes 'field' et 'firstname' existent
    if (fieldIndex === -1 || nameIndex === -1) {
      // Si l'une des colonnes est manquante, lancer une erreur
      throw new Error('Cannot load the database');
    }

    // Initialiser une carte pour compter les étudiants par domaine
    const fieldCounts = {};

    // Traiter chaque enregistrement d'étudiant
    students.forEach((student) => {
      // Diviser chaque ligne d'étudiant en colonnes
      const columns = student.split(',');

      // Vérifier si la ligne contient le bon nombre de colonnes
      if (columns.length !== headers.length) return; // Ignorer les lignes invalides

      // Extraire le champ et le prénom de l'étudiant
      const field = columns[fieldIndex].trim();
      const name = columns[nameIndex].trim();

      // Ajouter le prénom de l'étudiant à la liste du domaine correspondant
      if (!fieldCounts[field]) {
        fieldCounts[field] = [];
      }
      fieldCounts[field].push(name);
    });

    // Calculer le nombre total d'étudiants
    const totalStudents = students.length;

    // Afficher le nombre total d'étudiants
    console.log(`Number of students: ${totalStudents}`);

    // Afficher le nombre d'étudiants par domaine et la liste des prénoms
    Object.keys(fieldCounts).forEach((field) => {
      const names = fieldCounts[field];
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    });
  } catch (err) {
    // Afficher une erreur si le fichier ne peut pas être chargé
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
