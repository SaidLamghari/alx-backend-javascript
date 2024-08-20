const http = require('http');
const fs = require('fs');

// Définir le port et l'hôte pour le serveur HTTP
const PORT = 1245;
const HOST = 'localhost';

// Créer une instance de serveur HTTP
const app = http.createServer();

// Déterminer le fichier de base de données à partir des arguments de la ligne de commande
const DB_FILE = process.argv[2] || '';

/**
 * Compte les étudiants dans un fichier de données CSV.
 * La fonction lit le fichier CSV et génère un rapport sur le nombre total d'étudiants,
 * ainsi que le nombre d'étudiants dans chaque domaine d'étude.
 *
 * @param {string} dataPath - Le chemin vers le fichier de données CSV.
 * @returns {Promise<string>} - Une promesse qui résout avec le rapport des étudiants
 * ou rejette avec une erreur.
 * @throws {Error} - Rejette la promesse avec une erreur si le fichier ne peut pas être chargé.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  // Vérifier si le chemin du fichier est fourni
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  // Lire le fichier de manière asynchrone
  fs.readFile(dataPath, (err, data) => {
    if (err) {
      // Rejeter la promesse en cas d'erreur de lecture du fichier
      reject(new Error('Cannot load the database'));
      return;
    }

    // Traiter les données du fichier CSV
    const SignalerPces = [];
    const fileLines = data.toString('utf-8').trim().split('\n');
    const GrpsEtdiants = {};
    const NomsChampDB = fileLines[0].split(',');
    const NomsAccEtudiants = NomsChampDB.slice(0, -1);

    // Traiter chaque ligne d'étudiant à partir de la ligne 1 (en sautant l'en-tête)
    for (const line of fileLines.slice(1)) {
      const dossierEtudiant = line.split(',');
      const ValsEtudiants = dossierEtudiant.slice(0, -1);
      const field = dossierEtudiant[dossierEtudiant.length - 1];

      // Initialiser le groupe d'étudiants pour le domaine s'il n'existe pas
      if (!GrpsEtdiants[field]) {
        GrpsEtdiants[field] = [];
      }

      // Créer un objet étudiant avec les propriétés et les ajouter au groupe correspondant
      const EntrEtudiants = NomsAccEtudiants.map(
        (propName, idx) => [propName, ValsEtudiants[idx]],
      );
      GrpsEtdiants[field].push(Object.fromEntries(EntrEtudiants));
    }

    // Calculer le nombre total d'étudiants
    const ttlEtudiants = Object.values(GrpsEtdiants).reduce((acc, group) => acc + group.length, 0);
    SignalerPces.push(`Number of students: ${ttlEtudiants}`);

    // Ajouter les informations sur le nombre d'étudiants par domaine et leurs prénoms
    for (const [field, group] of Object.entries(GrpsEtdiants)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      SignalerPces.push(
        `Number of students in ${field}: ${group.length}. List: ${studentNames}`,
      );
    }

    // Résoudre la promesse avec le rapport formaté
    resolve(SignalerPces.join('\n'));
  });
});

/**
 * Gestionnaires des routes pour le serveur HTTP.
 * Chaque gestionnaire est associé à un chemin d'URL spécifique.
 */
const GESTIONNAIRES_SERVEURS = [
  {
    route: '/',
    handler(_, res) {
      // Réponse pour la route principale (/)
      const DonneResponse = 'Hello Holberton School!';

      // Configurer les en-têtes de la réponse
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', DonneResponse.length);
      res.statusCode = 200;

      // Envoyer la réponse au client
      res.end(DonneResponse);
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const partiesResponse = ['This is the list of our students'];

      // Appeler la fonction countStudents pour obtenir le rapport des étudiants
      countStudents(DB_FILE)
        .then((report) => {
          // Ajouter le rapport au contenu de la réponse
          partiesResponse.push(report);
          const DonneResponse = partiesResponse.join('\n');

          // Configurer les en-têtes de la réponse
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', DonneResponse.length);
          res.statusCode = 200;

          // Envoyer la réponse au client
          res.end(DonneResponse);
        })
        .catch((err) => {
          // Ajouter le message d'erreur au contenu de la réponse
          partiesResponse.push(err instanceof Error ? err.message : err.toString());
          const DonneResponse = partiesResponse.join('\n');

          // Configurer les en-têtes de la réponse
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', DonneResponse.length);
          res.statusCode = 500; // Changer le code de statut pour les erreurs
          res.end(DonneResponse);
        });
    },
  },
];

// Écouter les requêtes HTTP et utiliser les gestionnaires de route définis
app.on('request', (req, res) => {
  // Trouver et exécuter le gestionnaire correspondant à la route de la requête
  for (const routeHandler of GESTIONNAIRES_SERVEURS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      return;
    }
  }

  // Si aucune route ne correspond, renvoyer une réponse 404
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not Found');
});

// Démarrer le serveur et le faire écouter sur le port et l'hôte spécifiés
app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

// Exporter l'instance du serveur pour l'utiliser dans d'autres modules
module.exports = app;
