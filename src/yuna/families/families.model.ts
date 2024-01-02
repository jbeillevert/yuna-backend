

export class FamiliesModel {
    constructor(
        public id: number,
        public creationDate: Date,
        public lastname: string,
        public firstname: string,
        public adress: string,
        public phone: string,
        public city: string, 
    ) {}
}