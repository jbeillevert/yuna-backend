import { Controller, Get, Post, Put, Delete, Body, Req, Param, UseGuards } from '@nestjs/common';
import { FamiliesService } from './families.service';
import { FamiliesDto } from './families.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../../tools/RBAC/roles.guards'
import { Roles } from '../../tools/RBAC/role.decorators'
import { Role } from '../../tools/RBAC/role.enum'

@Controller('api/families')
@UseGuards(AuthGuard('jwt'))
export class FamiliesController {
    constructor(private familiesService: FamiliesService) {}

    @Get('/')
    async getAllFamilies() {
        return this.familiesService.getAllFamiliesService()
    }

    @Get('/:id')
    async getOneFamily(@Param('id') id: number, @Req() req) {
        return this.familiesService.getOneFamiliesService(id)
    }

    @Post('/create')
    async createFamily(@Body() FamiliesDto: FamiliesDto, @Req() req) {

        const { firstname, lastname, phone, adress, city } = FamiliesDto
        return this.familiesService.createFamiliesService(lastname, firstname, adress, phone, city)
    }


    @Put('/:id')
    async updateFamily(@Param('id') id: number, @Body() FamiliesDto: FamiliesDto, @Req() req) {

        const { firstname, lastname, phone, adress, city } = FamiliesDto
        return this.familiesService.updateFamiliesService(id, lastname, firstname, adress, phone, city)
    }

    @Delete('/:id')
    @UseGuards(AuthGuard(), RolesGuard)
    @Roles(Role.Admin) 
    async deleteFamily(@Param('id') id: number, @Req() req) {
        return this.familiesService.deleteFamiliesService(id)
    }


}
