import readDatabase from '../utils';

/**
 * La liste des majeures supportées.
 * @constant {Array<String>} MAJRSFORVLD - Liste des majeures supportées : CS (Computer Science)
 * et SWE (Software Engineering).
 */
const MAJRSFORVLD = ['CS', 'SWE'];

/**
 * Contient les gestionnaires de routes liés aux étudiants.
 * @class
 */
class StudentsController {
  /**
   * Gestionnaire de la route pour obtenir tous les étudiants.
   * @param {express.Request} request - La requête HTTP envoyée au serveur.
   * @param {express.Response} response - La réponse HTTP à envoyer au client.
   * @async
   * @function
   */
  static async getAllStudents(request, response) {
    const CheminDonne = process.argv.length > 2 ? process.argv[2] : '';

    try {
      const GrpsEtudiants = await readDatabase(CheminDonne);
      const rspsePrts = ['This is the list of our students'];

      // Fonction de comparaison pour trier les spécialités par ordre alphabétique
      const compafntc = (a, b) => {
        if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
        if (a[0].toLowerCase() > b[0].toLowerCase()) return 1;
        return 0;
      };

      // Trie et formatage des étudiants par spécialité
      for (const [field, group] of Object.entries(GrpsEtudiants).sort(compafntc)) {
        rspsePrts.push([
          `Number of students in ${field}: ${group.length}.`,
          'List:',
          group.map((student) => student.firstname).join(', '),
        ].join(' '));
      }
      response.status(200).send(rspsePrts.join('\n'));
    } catch (err) {
      response
        .status(500)
        .send(err instanceof Error ? err.message : err.toString());
    }
  }

  /**
   * Gestionnaire de la route pour obtenir les étudiants par spécialité.
   * @param {express.Request} request - La requête HTTP envoyée au serveur,
   * contenant le paramètre de spécialité.
   * @param {express.Response} response - La réponse HTTP à envoyer au client.
   * @async
   * @function
   */
  static async getAllStudentsByMajor(request, response) {
    const CheminDonne = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (!MAJRSFORVLD.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const GrpsEtudiants = await readDatabase(CheminDonne);
      let responseText = '';

      if (Object.keys(GrpsEtudiants).includes(major)) {
        const group = GrpsEtudiants[major];
        responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
      }
      response.status(200).send(responseText);
    } catch (err) {
      response
        .status(500)
        .send(err instanceof Error ? err.message : err.toString());
    }
  }
}

export default StudentsController;
module.exports = StudentsController;
