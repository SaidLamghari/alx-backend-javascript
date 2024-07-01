/**
 * Autor SAID LAMGHARI
 * Renvoie un tableau d'étudiants situés dans une ville donnée.
 * @param {Object[]} stdts - Un tableau d'objets étudiants.
 * @param {string} city - La ville pour laquelle on veut récupérer les étudiants.
 * @returns {Object[]} - Un tableau d'objets étudiants situés dans la ville spécifiée.
 */
function getStudentsByLocation(stdts, city) {
  // Utiliser la méthode filter pour récupérer les étudiants dans la ville donnée
  return stdts.filter((stdt) => stdt.location === city);
}

export default getStudentsByLocation;
