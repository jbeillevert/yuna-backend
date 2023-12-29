
export class user {
    constructor(
        public id: string,
        public created_at: Date,
        public email: string,
        public password: string,
        public role: string,
    ) {}
}