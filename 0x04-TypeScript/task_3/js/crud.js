// crud.js
// Fonction pour insérer une ligne
export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000)); // Simule l'ID généré pour la nouvelle ligne
}

// Fonction pour supprimer une ligne
export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return; // Aucune valeur de retour nécessaire
}

// Fonction pour mettre à jour une ligne
export function updateRow(rowId, row) {
  console.log(`Update rowne ${rowId}`, row);
  return rowId; // Retourne l'ID de la ligne mise à jour
}
