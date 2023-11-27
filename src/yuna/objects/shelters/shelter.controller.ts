import { Controller, Get, Post, Put, Delete, Body, Req, Param } from '@nestjs/common';
import { ShelterService } from './shelter.service';
import { ShelterDto } from './shelter.dto'

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
    async createShelter(@Body() ShelterDto: ShelterDto, @Req() req) {


        const { name, adress, cityID } = ShelterDto
        return this.shelterService.createShelterService(name, adress, cityID)
    }


    @Put('/:id')
    async updateShelter(@Param('id') id: string, @Body() ShelterDto: ShelterDto, @Req() req) {

        const { name, adress, cityID } = ShelterDto
        return this.shelterService.updateShelterService(id, name, adress, cityID)
    }

    @Delete('/:id') 
    async deleteShelter(@Param('id') id: string, @Req() req) {
        return this.shelterService.deleteShelterService(id)
    }






}
