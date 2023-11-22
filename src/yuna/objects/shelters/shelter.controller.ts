import { Controller, Get, Post, Body, Req, Param } from '@nestjs/common';
import { ShelterService } from './shelter.service';
import { CreateShelterDto } from './shelter.dto'

@Controller('api/shelter')
export class ShelterController {
    constructor(private shelterService: ShelterService) {}

    @Get('/')
    async getAllShelters() {
        return this.shelterService.getAllShelterService()
    }

    @Get('/:id')
    async getOneShelter(@Param('id') id: string, @Req() req) {
        return this.shelterService.getOneShelterService(id)
    }

    @Post('/create')
    async createShelter(@Body() createShelterDto: CreateShelterDto, @Req() req) {


        const { name, adress, cityID } = createShelterDto
        return this.shelterService.createShelterService(name, adress, cityID)
    }



}
