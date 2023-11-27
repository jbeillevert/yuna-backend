import { IsString, IsNotEmpty, MinLength, IsEmail, IsNumber } from 'class-validator'


export class ShelterDto {
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



