// Autor : SAID LAMGHARI
// Import de la classe ClassRoom depuis le fichier 0-classroom.js
import ClassRoom from './0-classroom';

// Fonction pour initialiser et retourner un tableau d'objets ClassRoom
export default function initializeRooms() {
  // Création de trois instances de ClassRoom avec des tailles spécifiques
  const rm1 = new ClassRoom(19);
  const rm2 = new ClassRoom(20);
  const rm3 = new ClassRoom(34);

  // Retourne un tableau contenant les trois objets ClassRoom créés
  return [rm1, rm2, rm3];
}
