// Importation du module Express
import express from 'express';

// Importation de la fonction pour configurer les routes
import mapRoutes from './routes';

// Création de l'application Express
const app = express();
// Définition du port sur lequel le serveur écoutera
const PORT = 1245;

// Configure les routes en utilisant la fonction importée
mapRoutes(app);

// Démarre le serveur et écoute les connexions sur le port spécifié
app.listen(PORT, () => {
  // Affiche un message dans la console lorsque le serveur est opérationnel
  console.log(`Server listening on PORT ${PORT}`);
});

// Exporte l'application pour être utilisée ailleurs (ex : pour les tests)
export default app;
