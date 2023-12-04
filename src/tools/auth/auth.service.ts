import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { UserQueries } from './userQueries'
import { user } from './user.model'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'


@Injectable()
export class AuthService {
    constructor(
        private readonly userQueries: UserQueries,
        private readonly userList: user[],
        private readonly jwt: JwtService
    ) {}
    

    private errorUserEmailAlreadyExist(email: string) {
        throw new ConflictException(`Erreur : Création de compte impossible, un compte est déjà lié à l'email ${email}.`)
    }

    
    private errorUserDontExist() {
        throw new UnauthorizedException(`Erreur : Connexion impossible, identifiants incorrects.`)
    }

    private errorWrongPassword() {
        throw new UnauthorizedException(`Erreur : Connexion impossible, identifiants incorrects.`)
    }
    


    async createAUser(email: string, password: string) {
        const emailExist = await this.userQueries.isUserExistInDBQuery(email)
        
        if (emailExist) {
            return this.errorUserEmailAlreadyExist(email)
        } else {
            const hashedPassword = await bcrypt.hash(password, 15)
            await this.userQueries.createUserQuery(email, hashedPassword)
            return `L'utilisateur ${email} à bien été inscrit.`
        }
    }

    async logAUser(email: string, password: string) {
        const emailExist = await this.userQueries.isUserExistInDBQuery(email)


        if (emailExist) {        
            const userConnection = await this.userQueries.findUserByEmailQuery(email)            
            const passwordMatch = await bcrypt.compare(password, userConnection[0].password)
            
            if (passwordMatch) {
                const payload = { userId: userConnection[0].id, email: userConnection[0].email, role: userConnection[0].roleID }
                const token = this.jwt.sign(payload)
                
                return { message: `Vous êtes maintenant connecté avec ${email}`, token: token }
            } else {
                
                return this.errorWrongPassword()   
            }
        } else {
            
            return this.errorUserDontExist()
        }
    }


    async showAllUsers() {
        return await this.userQueries.getAllusersQuery()

    }

}
