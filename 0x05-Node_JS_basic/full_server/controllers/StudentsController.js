import readDatabase from '../utils';

/**
 * La liste des majeures supportées.
 * @constant {Array<String>} MAJRSFORVLD - Liste des majeures
 * supportées : CS (Computer Science)
 * et SWE (Software Engineering). Cette liste est utilisée
 * pour valider les demandes d'accès aux données
 * basées sur la spécialité.
 */
const MAJRSFORVLD = ['CS', 'SWE'];

/**
 * Contient les gestionnaires de routes liés aux étudiants.
 * Cette classe regroupe les méthodes qui
 * traitent les requêtes HTTP concernant les étudiants.
 * @class
 */
class StudentsController {
  /**
   * Gestionnaire de la route pour obtenir tous les étudiants.
   * Cette méthode récupère la liste complète des étudiants depuis la base de données,
   * les trie par spécialité et renvoie un résumé formaté avec le nombre d'étudiants
   * et leurs noms par spécialité.
   * @param {express.Request} request - La requête HTTP envoyée au serveur.
   * @param {express.Response} response - La réponse HTTP à envoyer au client.
   * @async
   * @function
   */
  static async getAllStudents(request, response) {
    // Détermine le chemin du fichier de base de données
    // à partir des arguments de la ligne de commande.
    const CheminDonne = process.argv.length > 2 ? process.argv[2] : '';

    try {
      // Lecture des données de la base de données.
      const GrpsEtudiants = await readDatabase(CheminDonne);
      const rspsePrts = ['This is the list of our students'];

      // Fonction de comparaison pour trier les spécialités par ordre alphabétique.
      // Les spécialités sont triées avant d'être formatées pour la réponse.
      const compafntc = (a, b) => {
        if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
        if (a[0].toLowerCase() > b[0].toLowerCase()) return 1;
        return 0;
      };

      // Trie et formatage des étudiants par spécialité.
      for (const [field, group] of Object.entries(GrpsEtudiants).sort(compafntc)) {
        rspsePrts.push([
          `Number of students in ${field}: ${group.length}.`,
          'List:',
          group.map((student) => student.firstname).join(', '),
        ].join(' '));
      }

      // Envoi de la réponse avec la liste formatée des étudiants.
      response.status(200).send(rspsePrts.join('\n'));
    } catch (err) {
      // Gestion des erreurs, envoi d'un message d'erreur approprié si la lecture échoue.
      response
        .status(500)
        .send(err instanceof Error ? err.message : err.toString());
    }
  }

  /**
   * Gestionnaire de la route pour obtenir les étudiants par spécialité.
   * Cette méthode récupère les étudiants d'une spécialité spécifique fournie en paramètre
   * et renvoie une liste formatée de leurs noms. Elle valide également que la spécialité
   * demandée est bien supportée.
   * @param {express.Request} request - La requête HTTP envoyée au serveur,
   * contenant le paramètre de spécialité.
   * @param {express.Response} response - La réponse HTTP à envoyer au client.
   * @async
   * @function
   */
  static async getAllStudentsByMajor(request, response) {
    // Détermine le chemin du fichier de base de données
    // à partir des arguments de la ligne de commande.
    const CheminDonne = process.argv.length > 2 ? process.argv[2] : '';
    // Extrait la spécialité demandée depuis les paramètres de la requête.
    const { major } = request.params;

    // Vérifie si la spécialité fournie est valide.
    if (!MAJRSFORVLD.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      // Lecture des données de la base de données.
      const GrpsEtudiants = await readDatabase(CheminDonne);
      let responseText = '';

      // Vérifie si la spécialité demandée est présente dans les données.
      if (Object.keys(GrpsEtudiants).includes(major)) {
        const group = GrpsEtudiants[major];
        // Formate la réponse avec la liste des
        // noms des étudiants pour la spécialité demandée.
        responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
      }
      // Envoi de la réponse avec la liste des étudiants pour la spécialité demandée.
      response.status(200).send(responseText);
    } catch (err) {
      // Gestion des erreurs, envoi d'un message d'erreur approprié si la lecture échoue.
      response
        .status(500)
        .send(err instanceof Error ? err.message : err.toString());
    }
  }
}

export default StudentsController;
module.exports = StudentsController;
