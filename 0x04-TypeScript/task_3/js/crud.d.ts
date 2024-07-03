// Importation des types depuis interface.ts
import { RowID, RowElement } from './interface';

// Déclarations de type pour les fonctions CRUD
declare module "crud" {
    export function insertRow(row: RowElement): RowID;
    export function deleteRow(rowId: RowID): void;
    export function updateRow(rowId: RowID, row: RowElement): RowID;
}
