// Auteur SAID LAMGHARI
// Importation du module 'express' pour créer un serveur web
const express = require('express');

// Création d'une instance de l'application Express
const app = express();

// Définition du port sur lequel le serveur écoutera les requêtes
const PORT = 7865;

// Middleware pour analyser les requêtes entrantes avec des corps JSON
app.use(express.json());

// Définition d'une route GET pour le chemin racine ('/')
app.get('/', (_req, rs) => {
  // Envoi d'une réponse texte simple au client
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

// Définition d'une route GET pour le chemin '/available_payments'
app.get('/available_payments', (_req, rs) => {
  // Envoi d'une réponse JSON contenant les méthodes de paiement disponibles
  rs.json({ payment_methods: { credit_cards: true, paypal: false } });
});

// Définition d'une route POST pour le chemin '/login'
app.post('/login', (rq, rs) => {
  // Déclaration d'une variable pour stocker le nom d'utilisateur
  let username = '';

  // Vérification si le corps de la requête existe
  if (rq.body) {
    // Extraction du nom d'utilisateur depuis le corps de la requête
    username = rq.body.userName;
  }

  // Envoi d'une réponse personnalisée avec le nom d'utilisateur
  rs.send(`Welcome ${username}`);
});

// Démarrage du serveur sur le port défini
app.listen(PORT, () => {
  // Message affiché dans la console lorsque le serveur démarre avec succès
  console.log(`API available on localhost port ${PORT}`);
});

// Exportation de l'application Express pour
// l'utiliser dans d'autres modules ou pour les tests
module.exports = app;
