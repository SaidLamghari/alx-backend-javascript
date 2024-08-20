/**
 * Contient les gestionnaires de routes divers pour l'application.
 * Cette classe est utilisée pour gérer les requêtes HTTP
 * qui ne sont pas spécifiques aux étudiants,
 * comme la page d'accueil de l'application.
 *
 * @clas
 */
class AppController {
  /**
   * Gestionnaire de la route pour la page d'accueil.
   * Cette méthode est appelée lorsque le client accède à la racine de l'application ( `/` ).
   * Elle renvoie une réponse simple avec un message de bienvenue.
   *
   * @param {express.Request} request - L'objet de requête HTTP contenant les
   * informations sur la demande du client.
   * @param {express.Response} response - L'objet de réponse HTTP utilisé
   * pour envoyer une réponse au client.
   *
   * @static
   * @function
   */
  static getHomepage(request, response) {
    // Envoie une réponse HTTP avec le statut 200 (OK)
    // et le message "Hello Holberton School!"
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
