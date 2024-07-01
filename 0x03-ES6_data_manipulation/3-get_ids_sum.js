/**
 * Autor SAID LAMGHARI
 * Renvoie la somme de tous les identifiants d'étudiants.
 * @param {Object[]} stdts - Un tableau d'objets étudiants.
 * @returns {number} - La somme de tous les identifiants d'étudiants.
 */
function getStudentIdsSum(stdts) {
  // Utiliser la méthode reduce pour additionner tous les identifiants
  return stdts.reduce((sum, stdt) => sum + stdt.id, 0);
}

export default getStudentIdsSum;
