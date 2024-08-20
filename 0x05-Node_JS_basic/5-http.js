const http = require('http');
const fs = require('fs').promises;

// Définir les constantes pour le port et l'hôte
const PORT = 1245;
const HOST = 'localhost';

// Fonction pour lire les données des étudiants à partir d'un fichier CSV
const countStudents = async (filePath) => {
  try {
    // Lire le fichier CSV de manière asynchrone
    const data = await fs.readFile(filePath, 'utf-8');

    // Diviser le contenu du fichier en lignes
    const lines = data.trim().split('\n');

    // Initialiser un objet pour stocker les groupes d'étudiants par domaine
    const GrpsEtudiant = {};

    // Extraire les noms des colonnes de l'en-tête
    const headers = lines[0].split(',');
    const FldsEtudiant = headers.slice(0, headers.length - 1);

    // Traiter chaque ligne d'étudiant (à partir de la ligne 1)
    for (const line of lines.slice(1)) {
      const DonneEtudiant = line.split(',');

      // Vérifier si le nombre de colonnes correspond et s'il n'y a pas de champs vides
      if (DonneEtudiant.length === headers.length && !DonneEtudiant.some((field) => field.trim() === '')) {
        // Extraire les valeurs des propriétés et le domaine d'étude
        const values = DonneEtudiant.slice(0, DonneEtudiant.length - 1);
        const field = DonneEtudiant[DonneEtudiant.length - 1];

        // Initialiser le groupe d'étudiants pour le domaine s'il n'existe pas
        if (!GrpsEtudiant[field]) {
          GrpsEtudiant[field] = [];
        }

        // Créer un objet étudiant avec les propriétés
        const studentEntries = FldsEtudiant
          .map((fieldName, index) => [fieldName, values[index]]);

        // Ajouter l'objet étudiant au groupe correspondant
        GrpsEtudiant[field].push(Object.fromEntries(studentEntries));
      }
    }

    // Calculer le nombre total d'étudiants
    const ttlEtudiant = Object
      .values(GrpsEtudiant)
      .reduce((acc, group) => acc + group.length, 0);

    // Créer la réponse à retourner
    let response = `Number of students: ${ttlEtudiant}\n`;

    for (const [field, group] of Object.entries(GrpsEtudiant)) {
      const names = group.map((student) => student.firstname).join(', ');
      response += `Number of students in ${field}: ${group.length}. List: ${names}\n`;
    }

    return response.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

// Créer une instance de serveur HTTP
const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    // Répondre avec le message pour la racine '/'
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    // Répondre avec la liste des étudiants pour '/students'
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    try {
      const data = await countStudents(process.argv[2]);
      res.end(`This is the list of our students\n${data}\n`);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(`${error.message}\n`);
    }
  } else {
    // Répondre avec une erreur 404 pour les autres chemins
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

// Démarrer le serveur et le faire écouter sur le port et l'hôte spécifiés
app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

// Exporter l'instance du serveur pour l'utiliser dans d'autres modules
module.exports = app;
