export class Footballer {
    name: string;
    fullName: string;
    position: string;
    dateOfBirth: string;
    placeOfBirth: string;
    nationality: string;
    imgUrl: string;
    footballerType: string;

    constructor() {}

    getName(): string {
        return this.name;
    }

    getFullName(): string {
        return this.fullName;
    }

    getPosition(): string {
        return this.position;
    }

    getDateOfBirth(): string {
        return this.dateOfBirth;
    }

    getPlaceOfBirth(): string {
        return this.placeOfBirth;
    }

    getNationality(): string {
        return this.nationality;
    }

    getImgUrl() { return this.imgUrl; }

    getFootballeType() { return this.footballerType; }

    setName(name: string) {
        this.name = name;
    }

    setFullName(fullName: string) {
        this.fullName = fullName;
    }

    setPosition(position: string) {
        this.position = position;
    }

    setDateOfBirth(dateOfBirth: string) {
        this.dateOfBirth = dateOfBirth;
    }

    setPlaceOfBirth(placeOfBirth: string) {
        this.placeOfBirth = placeOfBirth;
    }
    setNationality(nationality: string) {
        this.nationality = nationality;
    }

    setImgUrl(imgUrl: string) { this.imgUrl = imgUrl; }


    setFootballerType(footballerType: string) {
        this.footballerType = footballerType;
    }


}
