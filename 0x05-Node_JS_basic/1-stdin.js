// File: 1-stdin.js
// Auteur SAID LAMGHARI
// Affiche un message de bienvenue
// et demande le nom de l'utilisateur.
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Écoute l'événement 'readable' sur l'entrée standard (stdin).
process.stdin.on('readable', () => {
  // Lit les données disponibles
  // dans le flux d'entrée standard.
  const databuffer = process.stdin.read();

  // Vérifie si des données ont été lues.
  if (databuffer) {
    // Affiche le nom de l'utilisateur (les données lues).
    // 'databuffer' contient les données lues sous forme de buffer,
    // donc elles sont directement utilisées ici.
    process.stdout.write(`Your name is: ${databuffer}`);
  }
});

// Écoute l'événement 'end' sur l'entrée standard (stdin).
process.stdin.on('end', () => {
  // Affiche un message indiquant que
  // le logiciel se ferme maintenant.
  process.stdout.write('This important software is now closing\n');
});
