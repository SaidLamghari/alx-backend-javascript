const express = require('express');

// Créer une instance de l'application Express
const appliction = express();

// Définir le port sur lequel le serveur écoutera
const PORT = 1245;

// Route principale pour le chemin "/"
// Répond avec "Hello Holberton School!" pour toute requête à l'URL racine
appliction.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

// Démarrer le serveur et le faire écouter sur le port spécifié
appliction.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

// Exporter l'instance de l'appliction pour
// l'utiliser dans d'autres modules ou tests
module.exports = appliction;
