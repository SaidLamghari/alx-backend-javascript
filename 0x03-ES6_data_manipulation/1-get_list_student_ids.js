/**
 * Autor SAID LAMGHARI
 * Renvoie un tableau d'identifiants d'étudiants.
 * @param {Object[]} stdts - Un tableau d'objets étudiants.
 * @returns {number[]} - Un tableau d'identifiants d'étudiants.
 */
function getListStudentIds(stdts) {
  // Vérifier si l'argument est un tableau
  if (!Array.isArray(stdts)) {
    return [];
  }

  // Utiliser la méthode map pour extraire les identifiants
  return stdts.map((stdt) => stdt.id);
}

export default getListStudentIds;
