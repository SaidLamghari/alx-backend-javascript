// Importer le module http de Node.js pour créer un serveur HTTP
const http = require('http');

// Créer un serveur HTTP
const app = http.createServer((req, res) => {
  // Définir les en-têtes de la réponse
  // Le code de statut 200 indique que la demande a été traitée avec succès
  // 'Content-Type': 'text/plain' spécifie que le type
  // de contenu de la réponse est du texte brut
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Envoyer la réponse au client
  // Le texte 'Hello Holberton School!\n' sera affiché dans le corps de la réponse
  res.end('Hello Holberton School!\n');
});

// Faire écouter le serveur sur le port 1245
// Le message dans la fonction de rappel s'affiche lorsque
// le serveur commence à écouter sur le port spécifié
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Exporter l'instance du serveur pour pouvoir la réutiliser dans d'autres modules
module.exports = app;
