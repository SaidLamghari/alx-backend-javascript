// interface.ts

// Définition du type RowID
type RowID = number;

// Interface RowElement avec les champs requis
interface RowElement {
    firstName: string;
    lastName: string;
    age?: number; // Champ optionnel
}

export { RowID, RowElement };
