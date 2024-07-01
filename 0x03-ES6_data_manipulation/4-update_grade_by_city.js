/**
 * Autor SAID LAMGHARI
 * Renvoie un tableau d'étudiants d'une ville donnée avec leurs nouvelles notes.
 * @param {Object[]} stdts - Un tableau d'objets étudiants.
 * @param {string} city - La ville pour laquelle on veut mettre à jour les notes.
 * @param {Object[]} newGrades - Un tableau d'objets contenant les nouvelles notes.
 * @returns {Object[]} - Un tableau d'objets étudiants avec leurs nouvelles notes.
 */
export default function updateStudentGradeByCity(stdts, city, newGrades) {
  // Filtrer les étudiants de la ville donnée
  const studentsInCity = stdts.filter((stdt) => stdt.location === city);

  // Mettre à jour les notes des étudiants en utilisant map
  return studentsInCity.map((stdt) => {
    // Trouver la nouvelle note de l'étudiant dans le tableau newGrades
    const newGrade = newGrades.find((grade) => grade.studentId === stdt.id);
    // Retourner un nouvel objet étudiant avec la nouvelle note
    return {
      ...stdt,
      grade: newGrade ? newGrade.grade : 'N/A',
    };
  });
}
