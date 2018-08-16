export class Footballer {
    name: string;
    position: string;
    dateOfBirth: string;
    nationality: string;

    constructor() {}

    getName(): string {
        return this.name;
    }

    getPosition(): string {
        return this.position;
    }

    getDateOfBirth(): string {
        return this.dateOfBirth;
    }

    getNationality(): string {
        return this.nationality;
    }

    setName(name: string) {
        this.name = name;
    }

    setPosition(position: string) {
        this.position = position;
    }

    setDateOfBirth(dateOfBirth: string) {
        this.dateOfBirth = dateOfBirth;
    }
    setNationality(nationality: string) {
        this.nationality = nationality;
    }

}
