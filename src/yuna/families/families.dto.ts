import { IsString, IsNotEmpty, IsOptional } from 'class-validator'


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
    @IsOptional()
    phone: string
    
    @IsString()
    @IsNotEmpty()
    city: string
}



