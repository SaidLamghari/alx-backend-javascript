// Importation du contrôleur pour les routes liées à l'application
import AppController from '../controllers/AppController.js';

// Importation du contrôleur pour les routes liées aux étudiants
import StudentsController from '../controllers/StudentsController.js';

/**
 * Lie les routes aux gestionnaires appropriés dans l'application Express donnée.
 * Cette fonction configure les routes HTTP pour l'application Express en associant
 * les chemins d'URL aux méthodes spécifiques des contrôleurs.
 *
 * @param {Express.Application} app - L'application Express sur laquelle
 * les routes doivent être configurées.
 * Cette application est l'instance principale d'Express qui sera utilisée pour définir les routes.
 *
 * Les routes sont configurées comme suit :
 * - `GET /` : Appelle la méthode `getHomepage` du contrôleur `AppController`
 * - `GET /students` : Appelle la méthode `getAllStudents` du contrôleur `StudentsController`
 * - `GET /students/:major` : Appelle la méthode
 *   `getAllStudentsByMajor` du contrôleur `StudentsController`
 *
 * @example
 * // Exemple d'utilisation de la fonction mapsForRotes
 * import express from 'express';
 * import mapsForRotes from './routes'; // Chemin vers le fichier contenant cette fonction
 *
 * const app = express();
 * mapsForRotes(app); // Configure les routes sur l'application Express
 */
const mapsForRotes = (app) => {
  // Route pour la page d'accueil
  // Appelle la méthode getHomepage du contrôleur AppController
  app.get('/', AppController.getHomepage);

  // Route pour obtenir la liste de tous les étudiants
  // Appelle la méthode getAllStudents du contrôleur StudentsController
  app.get('/students', StudentsController.getAllStudents);

  // Route pour obtenir les étudiants par spécialité (major)
  // Appelle la méthode getAllStudentsByMajor du contrôleur StudentsController
  // :major est un paramètre dynamique qui représente la spécialité des étudiants à filtrer
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapsForRotes;
