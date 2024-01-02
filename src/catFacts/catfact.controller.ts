import { Controller, Get, Post, Put, Delete, Body, Req, Param } from '@nestjs/common';
import { CatfactService } from './catfact.service';

@Controller('api/catfacts')
export class CatfactController {
    constructor(private catfactservice: CatfactService) {}

    @Get('/fact')
    async getCatfact() {
        return await this.catfactservice.getCatfactService()
    }

}
