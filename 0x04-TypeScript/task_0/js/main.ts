interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const s1: Student = {
    firstName: 'Mohamed',
    lastName: 'Eladly',
    age: 20,
    location: 'EG'
}

const s2: Student = {
    firstName: 'Abrafa',
    lastName: 'Elipaly',
    age: 20,
    location: 'EG'
}

const studentList: Student[] = [s1, s2];

function renderTable (studentList: Student[]) : void {
    const table = document.createElement('table');

    for (const student of studentList) {
        const row = document.createElement('tr');
        const fNCell = document.createElement('td');
        const locationCell = document.createElement('td');
        fNCell.innerText = student.firstName;
        locationCell.innerText = student.location;
        row.appendChild(fNCell);
        row.appendChild(locationCell);
        table.appendChild(row);
    }

    document.body.appendChild(table);
} 

renderTable(studentList);