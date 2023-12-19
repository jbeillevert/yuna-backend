import { IsString, IsNotEmpty, IsNumber } from 'class-validator'


export class FamiliesDto {
    @IsString()
    @IsNotEmpty()
    lastname: string

    @IsString()
    @IsNotEmpty()
    firstname: string

    @IsString()
    @IsNotEmpty()
    adress: string

    @IsString()
    @IsNotEmpty()
    phone: string
    
    @IsNumber()
    @IsNotEmpty()
    cityID: number
}



