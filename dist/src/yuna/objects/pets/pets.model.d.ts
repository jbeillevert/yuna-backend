import { ShelterModel } from "../shelters/shelter.model";
import { Race } from "src/yuna/infos/races/races.model";
import { Genre } from "src/yuna/infos/genres/genres.model";
import { Species } from "src/yuna/infos/species/species.model";
export declare class Pet {
    id: number;
    creationDate: Date;
    icad: number;
    name: string;
    birthDate: Date;
    rescueDate: Date;
    adoptionDate: Date;
    shelterId: ShelterModel;
    race1Id: Race;
    race2Id: Race;
    genreId: Genre;
    speciesId: Species;
    constructor(id: number, creationDate: Date, icad: number, name: string, birthDate: Date, rescueDate: Date, adoptionDate: Date, shelterId: ShelterModel, race1Id: Race, race2Id: Race, genreId: Genre, speciesId: Species);
}
