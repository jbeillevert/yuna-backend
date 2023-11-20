import { City } from "src/yuna/infos/cities/city.model";
import { Experience } from "src/yuna/infos/experiences/experience.model";
import { Species } from "src/yuna/infos/species/species.model";


export class Families {
    constructor(
        public id: number,
        public creationDate: Date,
        public lastname: string,
        public firstname: string,
        public adress: string,
        public phone: number,
        public cityId: City, // clé etrangere vers table Cities
        public experienceId: Experience, // clé etrangere vers table Experience
        public speciesToleranceId: Species, // clé etrangere vers table species
    ) {}
}