import fs from 'fs';
import { promisify } from 'util';

// Utilisation de promisify pour convertir les méthodes
// callback de fs en méthodes basées sur des promesses
const fsPromises = {
  readFile: promisify(fs.readFile),
};

/**
 * Lit les données des étudiants à partir d'un fichier CSV.
 * @param {String} chmnDonne - Le chemin vers le fichier CSV
 * contenant les données des étudiants.
 * @returns {Promise<Object>} Une promesse qui se résout en un objet
 * où les clés sont les noms de champs et les valeurs
 * sont des tableaux d'objets représentant les étudiants.
 * @throws {Error} Lance une erreur si le fichier
 * est inaccessible ou si le chemin est invalide.
 *
 * Exemple de structure retournée :
 * {
 *   "CS": [
 *     { "firstname": "Johann", "lastname": "Doe", "age": 20 },
 *     { "firstname": "Arielle", "lastname": "Smith", "age": 22 }
 *   ],
 *   "SWE": [
 *     { "firstname": "Guillaume", "lastname": "Brown", "age": 23 }
 *   ]
 * }
 */
const readDatabase = async (chmnDonne) => {
  try {
    // Vérifie que le chemin du fichier est fourni
    if (!chmnDonne) throw new Error('Le chemin du fichier est invalide.');

    // Lit le contenu du fichier de manière asynchrone
    const data = await fsPromises.readFile(chmnDonne, 'utf-8');

    // Divise le contenu en lignes
    const fileLines = data.trim().split('\n');

    // Vérifie que le fichier contient des lignes
    if (fileLines.length === 0) throw new Error('Le fichier est vide ou inaccessible.');

    // Initialise un objet pour regrouper les étudiants par champ (ex : CS, SWE)
    const GrpsEtudiants = {};

    // Extrait les noms des champs à partir de la première ligne du fichier
    const dbFieldNames = fileLines[0].split(',');
    const NomsEtudiants = dbFieldNames.slice(0, -1); // Noms des champs des étudiants

    // Traite chaque ligne du fichier à partir de la deuxième ligne
    for (const line of fileLines.slice(1)) {
      // Divise chaque ligne en valeurs
      const donneEtudiants = line.split(',');
      const valsEtudiants = donneEtudiants.slice(0, -1); // Valeurs des champs des étudiants
      const field = donneEtudiants[donneEtudiants.length - 1]; // Champ d'étude de l'étudiant

      // Initialise un tableau pour chaque champ si ce n'est pas encore fait
      if (!GrpsEtudiants[field]) {
        GrpsEtudiants[field] = [];
      }

      // Crée un objet étudiant à partir des propriétés et valeurs
      const EntreEtuduants = NomsEtudiants
        .map((propName, idx) => [propName, valsEtudiants[idx]]);
      GrpsEtudiants[field].push(Object.fromEntries(EntreEtuduants));
    }

    // Retourne l'objet regroupant les étudiants par champ
    return GrpsEtudiants;
  } catch (error) {
    // Lance une erreur en cas de problème avec la lecture du fichier
    throw new Error('Impossible de charger la base de données.');
  }
};

export default readDatabase;
