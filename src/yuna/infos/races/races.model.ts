import { Species } from "../species/species.model";


export class Race {
    constructor(
        public id: number,
        public experience: string,
        public speciesId: Species,
    ) {}
}