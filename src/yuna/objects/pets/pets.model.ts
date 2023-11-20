import { Shelter } from "../shelters/shelter.model";
import { Race } from "src/yuna/infos/races/races.model";
import { Genre } from "src/yuna/infos/genres/genres.model";
import { Species } from "src/yuna/infos/species/species.model";



export class Pet {
    constructor(
        public id: number,
        public creationDate: Date,
        public icad: number,
        public name: string,
        public birthDate: Date,
        public rescueDate: Date,
        public adoptionDate: Date,
        public shelterId: Shelter, // clé etrangere vers table Shelter
        public race1Id: Race, // clé etrangere vers table Races
        public race2Id: Race, // clé etrangere vers table Races (optionnel)
        public genreId: Genre, // clé etrangere vers table Genres
        public speciesId: Species, // clé etrangere vers table Species

    ) {}
}