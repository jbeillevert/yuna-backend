import { IsString, IsNotEmpty, MinLength, IsEmail, IsNumber } from 'class-validator'


export class CreateShelterDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    adress: string
    
    @IsNumber()
    @IsNotEmpty()
    cityID: number
}


export class LoginDto {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string
}