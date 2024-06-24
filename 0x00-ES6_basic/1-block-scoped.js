// Modifier par : SAID LAMGHARI
export default function taskBlock(trueOrFalse) {
  let task = false; // Utilisation de let pour une variable réassignée
  let task2 = true; // Utilisation de let pour une variable réassignée

  if (trueOrFalse) {
    task = true; // Réaffectation de la variable task
    task2 = false; // Réaffectation de la variable task2
  }

  return [task, task2];
}
