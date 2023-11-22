import { Controller, Get } from '@nestjs/common';
import { ShelterService } from './shelter.service';

@Controller('shelter')
export class ShelterController {
    constructor(private shelterService: ShelterService) {}

    @Get()
    async getAllShelters() {
        return this.shelterService.getAllShelterService()
    }

}
