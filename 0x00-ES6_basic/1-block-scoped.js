// Modifier par SAID LAMGHARI
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // eslint-disable-next-line no-unused-vars, no-shadow
    const task = true; // Déclaration d'une nouvelle variable
    // eslint-disable-next-line no-unused-vars, no-shadow
    const task2 = false; // Déclaration d'une nouvelle variable
  }

  return [task, task2];
}
