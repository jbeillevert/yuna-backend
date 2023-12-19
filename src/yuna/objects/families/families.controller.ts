import { Controller, Get, Post, Put, Delete, Body, Req, Param } from '@nestjs/common';
import { FamiliesService } from './families.service';
import { FamiliesDto } from './families.dto';

@Controller('api/families')
export class FamiliesController {
    constructor(private familiesService: FamiliesService) {}

    @Get('/')
    async getAllFamilies() {
        return this.familiesService.getAllFamiliesService()
    }

    @Get('/:id')
    async getOneFamily(@Param('id') id: string, @Req() req) {
        return this.familiesService.getOneFamiliesService(id)
    }

    @Post('/create')
    async createFamily(@Body() FamiliesDto: FamiliesDto, @Req() req) {

        const { firstname, lastname, phone, adress, cityID } = FamiliesDto
        return this.familiesService.createFamiliesService(lastname, firstname, phone, adress, cityID)
    }


    @Put('/:id')
    async updateFamily(@Param('id') id: string, @Body() FamiliesDto: FamiliesDto, @Req() req) {

        const { firstname, lastname, phone, adress, cityID } = FamiliesDto
        return this.familiesService.updateFamiliesService(id, lastname, firstname, phone, adress, cityID)
    }

    @Delete('/:id') 
    async deleteFamily(@Param('id') id: string, @Req() req) {
        return this.familiesService.deleteFamiliesService(id)
    }


}
