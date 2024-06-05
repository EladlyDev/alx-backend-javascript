/// <reference path='crud.d.ts' />
import { RowID, rowElement } from './interface';
import * as crud from './crud';

const row: rowElement = {
    firstName: 'Mohamed',
    lastName: 'Eladly',
}

const newRowID: RowID = crud.insertRow(row);

const updateRow: rowElement = {
    firstName: 'Mohamed',
    lastName: 'Eladly',
    age: 20
}

crud.updateRow(newRowID, updateRow);
crud.deleteRow(newRowID);