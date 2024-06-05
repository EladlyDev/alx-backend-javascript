interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [index:string]: any,
}

interface Directors extends Teacher {
    numberOfReports: number
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher : printTeacherFunction = (firstName, lastName) => `${firstName[0]}. ${lastName}`;

interface studentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}
interface studentClassConstructurInterface {
    new (firstName: string, lastName: string): studentClassInterface;
}

class StudentClass implements studentClassInterface {
    private _firstName!: string;
    private _lastName!: string;

    constructur(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    workOnHomework() {
        return 'Currently working';
    }
    
    displayName() {
        return this._firstName;
    }
}