// main.ts

// Directive de chemin d'ambiance pour les types définis dans crud.d.ts
/// <reference path="./crud.d.ts" />

// Importation des types et des fonctions
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Création d'un objet row avec le type RowElement et ses valeurs
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

// Appel de la fonction insertRow pour ajouter une nouvelle ligne
const newRowID: RowID = CRUD.insertRow(row);
console.log(`CRUD.insertRow(obj)`);
// Insertion de la ligne {firstName: "Guillaume", lastName: "Salva"}

// Mise à jour de l'objet row avec un champ age
const updatedRow: RowElement = {
    ...row,
    age: 23
};

// Appel de la fonction updateRow pour mettre à jour la ligne
CRUD.updateRow(newRowID, updatedRow);
console.log(`CRUD.updateRow(${newRowID}, updatedRow)`);
// Mise à jour de la ligne 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

// Appel de la fonction deleteRow pour supprimer la ligne
CRUD.deleteRow(newRowID);
console.log(`CRUD.deleteRow(${newRowID})`);
// Suppression de la ligne avec ID 125
