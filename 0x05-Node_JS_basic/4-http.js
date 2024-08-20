// Importer le module 'http' de Node.js
// Auteur SAID LAMGHARI
const http = require('http');

// Définir les constantes pour le port et l'hôte
const PORT = 1245;
const HOST = 'localhost';

// Créer une instance de serveur HTTP
const app = http.createServer();

// Écouter l'événement 'request' sur le serveur
// Ce callback est appelé chaque fois qu'une requête est reçue
app.on('request', (_, res) => {
  // Définir le texte de la réponse
  const DisplaysText = 'Hello Holberton School!';

  // Définir les en-têtes de la réponse
  // 'Content-Type' spécifie le type de contenu comme du texte brut
  res.setHeader('Content-Type', 'text/plain');

  // 'Content-Length' spécifie la longueur du corps de la réponse
  res.setHeader('Content-Length', DisplaysText.length);

  // Définir le code de statut HTTP comme 200 (OK)
  res.statusCode = 200;

  // Écrire le texte de la réponse dans le flux de sortie
  // Utiliser Buffer.from() pour convertir le texte en tampon binaire
  res.write(Buffer.from(DisplaysText));

  // Terminer la réponse
  res.end();
});

// Démarrer le serveur et le faire écouter sur le port et l'hôte spécifiés
app.listen(PORT, HOST, () => {
  // Écrire un message dans le flux de sortie
  // standard pour indiquer que le serveur écoute
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

// Exporter l'instance du serveur pour l'utiliser dans d'autres modules
module.exports = app;
