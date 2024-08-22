// Auteur SAID LAMGHARI
// Importation du module 'express', qui est un
// framework pour créer des serveurs web en Node.js
const express = require('express');

// Création d'une application Express
const app = express();

// Définition du port sur lequel le serveur écoutera les requêtes
const PORT = 7865;

// Définition d'une route GET pour le chemin racine ('/')
app.get('/', (_, rs) => {
  // Envoi d'une réponse simple au client
  rs.send('Welcome to the payment system');
});

// Définition d'une route GET pour le chemin
// '/cart/:id' où ':id' est un paramètre numérique
app.get('/cart/:id(\\d+)', (rq, rs) => {
  // Extraction du paramètre 'id' de l'URL
  const id = rq.params.id;

  // Envoi d'une réponse personnalisée incluant l'identifiant du panier
  rs.send(`Payment methods for cart ${id}`);
});

// Démarrage du serveur sur le port défini
app.listen(PORT, () => {
  // Message affiché dans la console lorsque le serveur démarre avec succès
  console.log(`API available on localhost port ${PORT}`);
});

// Exportation de l'application Express pour qu'elle puisse
// être utilisée dans d'autres modules ou fichiers
module.exports = app;
