// 8-api/api.js

const express = require('express');
const app = express();
const port = 7865;

// Route pour la racine
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

// Exporter l'application pour les tests
module.exports = app;
