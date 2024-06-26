import { RowID, RowElement } from './interface.ts';

export function insertRow(row: RowElement): number;

export function deleteRow(rowID: RowID): void;

export function updateRow(rowID: RowID, row: RowElement): RowID;