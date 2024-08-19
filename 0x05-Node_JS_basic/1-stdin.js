// Affiche un message de bienvenue et demande le nom de l'utilisateur.
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Écoute les données entrantes depuis l'entrée standard (stdin).
process.stdin.on('data', (data) => {
  // Convertit les données reçues en chaîne de caractères et supprime les espaces blancs autour.
  const name = data.toString().trim();

  // Affiche le nom de l'utilisateur.
  process.stdout.write(`Your name is: ${name}\n`);

  // Affiche un message indiquant que le logiciel se ferme.
  process.stdout.write('This important software is now closing\n');

  // Termine le processus avec un code de sortie 0 (succès).
  process.exit();
});
