

export class FamiliesModel {
    constructor(
        public id: string,
        public lastname: string,
        public firstname: string,
        public adress: string,
        public phone: string,
        public cityId: number, // clé etrangere vers table Cities
        public creationDate: Date,
    ) {}
}