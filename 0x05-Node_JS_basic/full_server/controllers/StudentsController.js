// Importation de la fonction pour lire les données des étudiants
import readDatabase from '../utils';

/**
 * La liste des majeures supportées.
 * Cette liste définit les spécialités valides pour lesquelles des données
 * d'étudiants peuvent être demandées.
 *
 * @constant {Array<String>} MAJRSFORVLD - Liste des majeures supportées : CS (Computer Science)
 * et SWE (Software Engineering).
 */
const MAJRSFORVLD = ['CS', 'SWE'];

/**
 * Contient les gestionnaires de routes liés aux étudiants.
 * Cette classe gère les routes pour obtenir les informations des étudiants,
 * soit pour tous les étudiants, soit pour ceux d'une spécialité spécifique.
 *
 * @class
 */
class StudentsController {
  /**
   * Gestionnaire de la route pour obtenir tous les étudiants.
   * Cette méthode traite les requêtes HTTP pour obtenir la liste de tous les étudiants,
   * les regroupe par spécialité et retourne les informations dans la réponse HTTP.
   *
   * @param {express.Request} request - La requête HTTP envoyée au serveur.
   * @param {express.Response} response - La réponse HTTP à envoyer au client.
   *
   * @async
   * @function
   */
  static async getAllStudents(request, response) {
    // Détermine le chemin des données en fonction des arguments passés au processus
    const CheminDonne = process.argv.length > 2 ? process.argv[2] : '';

    try {
      // Lit les données des étudiants depuis le fichier
      const GrpsEtudiants = await readDatabase(CheminDonne);
      const rspsePrts = ['This is the list of our students'];

      // Fonction de comparaison pour trier les spécialités par ordre alphabétique
      const compafntc = (a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase());

      // Trie et formatage des étudiants par spécialité
      for (const [field, group] of Object.entries(GrpsEtudiants).sort(compafntc)) {
        rspsePrts.push(
          `Number of students in ${field} : ${group.length}. List : ${group.map((student) => student.firstname).join(', ')}`,
        );
      }
      // Envoie la réponse au client avec le statut 200 (OK)
      response.status(200).send(rspsePrts.join('\n'));
    } catch (err) {
      // Envoie une réponse d'erreur en cas d'échec de la lecture des données
      response.status(500).send(err instanceof Error ? err.message : err.toString());
    }
  }

  /**
   * Gestionnaire de la route pour obtenir les étudiants par spécialité.
   * Cette méthode traite les requêtes HTTP pour obtenir la liste des
   * étudiants d'une spécialité spécifique,
   * si la spécialité est valide (CS ou SWE).
   *
   * @param {express.Request} request - La requête HTTP envoyée au serveur,
   * contenant le paramètre de spécialité.
   * @param {express.Response} response - La réponse HTTP à envoyer au client.
   *
   * @async
   * @function
   */
  static async getAllStudentsByMajor(request, response) {
    // Détermine le chemin des données en fonction des arguments passés au processus
    const CheminDonne = process.argv.length > 2 ? process.argv[2] : '';
    // Récupère le paramètre de spécialité depuis l'URL
    const { major } = request.params;

    // Vérifie si la spécialité demandée est valide
    if (!MAJRSFORVLD.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      // Lit les données des étudiants depuis le fichier
      const GrpsEtudiants = await readDatabase(CheminDonne);

      // Vérifie si des données existent pour la spécialité demandée
      if (GrpsEtudiants[major]) {
        const group = GrpsEtudiants[major];
        // Crée une chaîne de caractères pour la liste des étudiants de la spécialité
        const responseText = `List : ${group.map((student) => student.firstname).join(', ')}`;
        // Envoie la réponse avec le statut 200 (OK)
        response.status(200).send(responseText);
      } else {
        // Envoie une réponse indiquant qu'il n'y a pas d'étudiants pour cette spécialité
        response.status(200).send('List : ');
      }
    } catch (err) {
      // Envoie une réponse d'erreur en cas d'échec de la lecture des données
      response.status(500).send(err instanceof Error ? err.message : err.toString());
    }
  }
}

export default StudentsController;
