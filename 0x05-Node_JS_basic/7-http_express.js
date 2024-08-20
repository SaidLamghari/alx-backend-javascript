const express = require('express');
// Utiliser fs.promises pour les appels asynchrones
const fs = require('fs').promises;

const app = express();

const PORT = 1245;

// Obtenir le chemin du fichier CSV à
// partir des arguments de la ligne de commande
const DB_FILE = process.argv[2] || '';

/**
 * Fonction pour compter les étudiants à partir d'un fichier CSV.
 * @param {String} Donnechemain Le chemin vers le fichier de données CSV.
 * @returns {Promise<String>} Une promesse qui se résout avec le rapport des étudiants.
 * @throws {Error} En cas d'erreur de lecture du fichier ou de traitement.
 */
const countStudents = async (Donnechemain) => {
  if (!Donnechemain) {
    throw new Error('Cannot load the database');
  }

  try {
    const data = await fs.readFile(Donnechemain, 'utf-8');
    const fileLines = data.trim().split('\n');

    // Initialiser les objets pour les groupes d'étudiants
    const GrpsEtudiants = {};
    const DonneNoms = fileLines[0].split(',');
    const NomsEtudiants = DonneNoms.slice(0, DonneNoms.length - 1);

    // Traiter chaque ligne pour extraire les informations des étudiants
    for (const line of fileLines.slice(1)) {
      const champsEtudiants = line.split(',');
      // Vérifier que la ligne est correctement formatée avant de traiter
      if (champsEtudiants.length === DonneNoms.length) {
        const ValsEtudiants = champsEtudiants.slice(0, champsEtudiants.length - 1);
        const field = champsEtudiants[champsEtudiants.length - 1];

        if (!GrpsEtudiants[field]) {
          GrpsEtudiants[field] = [];
        }

        const EtudiantsEntre = NomsEtudiants.map((propName, idx) => [
          propName,
          ValsEtudiants[idx],
        ]);
        GrpsEtudiants[field].push(Object.fromEntries(EtudiantsEntre));
      }
    }

    // Calculer le nombre total d'étudiants et préparer le rapport
    const ttlEtudiants = Object.values(GrpsEtudiants).reduce(
      (total, group) => total + group.length,
      0,
    );

    const reportParts = [`Number of students: ${ttlEtudiants}`];
    for (const [field, group] of Object.entries(GrpsEtudiants)) {
      const studentsList = group.map((student) => student.firstname).join(', ');
      reportParts.push(
        `Number of students in ${field}: ${group.length}. List: ${studentsList}`,
      );
    }

    return reportParts.join('\n');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

// Route pour l'URL racine "/"
// Répond avec "Hello Holberton School!" pour toute requête à l'URL racine
app.get('/', (_, res) => {
  res.type('text/plain'); // Définir le type de contenu en texte brut
  res.send('Hello Holberton School!');
});

// Route pour l'URL "/students"
// Répond avec la liste des étudiants en lisant le fichier CSV
app.get('/students', async (_, res) => {
  const PatrieReps = ['This is the list of our students'];

  try {
    const report = await countStudents(DB_FILE);
    PatrieReps.push(report);
  } catch (error) {
    PatrieReps.push(error.message);
  }

  const DonneReps = PatrieReps.join('\n');
  res.type('text/plain'); // Définir le type de contenu en texte brut
  res.send(DonneReps);
});

// Démarrer le serveur et le faire écouter sur le port spécifié
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

// Exporter l'instance de l'application pour l'utiliser dans d'autres modules ou tests
module.exports = app;
