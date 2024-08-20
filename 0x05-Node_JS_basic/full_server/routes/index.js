// Importation du contrôleur pour les routes générales
const AppController = require('../controllers/AppController');
// Importation du contrôleur pour les routes liées aux étudiants
const StudentsController = require('../controllers/StudentsController');

/**
 * Associe les routes aux gestionnaires appropriés dans l'application Express donnée.
 * Cette fonction configure les routes HTTP de l'application Express en les liant aux méthodes
 * spécifiques des contrôleurs.
 *
 * @param {Express.Application} app - L'application Express sur
 * laquelle les routes doivent être configurées.
 * Cette application est l'instance principale d'Express utilisée pour définir les routes.
 *
 * Les routes sont configurées comme suit :
 * - `GET /` : Appelle la méthode `getHomepage` du contrôleur `AppController`
 * - `GET /students` : Appelle la méthode `getAllStudents`
 * du contrôleur `StudentsController`
 * - `GET /students/:major` : Appelle la méthode
 * `getAllStudentsByMajor` du contrôleur `StudentsController`
 */
const mapRoutes = (app) => {
  // Route pour la page d'accueil
  // Appelle la méthode `getHomepage` du contrôleur `AppController`
  app.get('/', AppController.getHomepage);

  // Route pour obtenir la liste de tous les étudiants
  // Appelle la méthode `getAllStudents` du contrôleur `StudentsController`
  app.get('/students', StudentsController.getAllStudents);

  // Route pour obtenir les étudiants par majeure
  // Appelle la méthode `getAllStudentsByMajor` du contrôleur `StudentsController`
  // :major est un paramètre dynamique représentant la majeure des étudiants à filtrer
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

// Exporte la fonction `mapRoutes` pour l'utiliser dans d'autres fichiers
module.exports = mapRoutes;
