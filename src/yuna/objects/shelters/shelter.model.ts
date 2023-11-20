import { City } from "src/yuna/infos/cities/city.model";

export class ShelterModel {
    constructor(
        public id: number,
        public name: string,
        public adress: string,
        public cityId: City, // clé etrangere vers table Cities
    ) {}
}