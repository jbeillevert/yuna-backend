

export class FamiliesModel {
    constructor(
        public id: string,
        public creationDate: Date,
        public lastname: string,
        public firstname: string,
        public adress: string,
        public phone: string,
        public cityId: number, // clé etrangere vers table Cities
    ) {}
}