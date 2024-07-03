// Définir l'interface Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Créer deux étudiants
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 22,
  location: 'San Francisco'
};

// Créer un tableau d'étudiants
const studentsList: Student[] = [student1, student2];

// Créer un tableau HTML et l'ajouter au document
const table = document.createElement('table');
studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');
  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});
document.body.appendChild(table);
