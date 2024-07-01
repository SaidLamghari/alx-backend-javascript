/**
 * Autor SAID LAMGHARI
 * Renvoie un tableau d'objets représentant des étudiants.
 * Chaque objet a trois propriétés : id (Nombre),
 * firstName (Chaîne de caractères) et location (Chaîne de caractères).
 * Les étudiants inclus sont :
 * - Guillaume, id: 1, à San Francisco
 * - James, id: 2, à Columbia
 * - Serena, id: 5, à San Francisco
 * @returns {Object[]} - Un tableau d'objets étudiants.
 */
function getListStudents() {
  // Définition des objets représentant les étudiants
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}

export default getListStudents;
