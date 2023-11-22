import { Injectable, NotFoundException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { ShelterQueries } from './shelterQueries';
import { ShelterModel } from './shelter.model';
import { City } from 'src/yuna/infos/cities/city.model';


@Injectable() 
export class ShelterService {
    constructor(private readonly shelterQueries: ShelterQueries) {}

    public shelterList: ShelterModel[] = []

    async createShelterService(name: string, adress: string, cityId: City) {
        
    }

    async updateShelterService(id: number, updateData: Partial<ShelterModel>) {

    }

    async getAllShelterService() {
        try {
            return await this.shelterQueries.getAllShelterQuery()
        } catch (error) {
            throw new BadRequestException(error.message)
        }

    }

    async getOneShelterService(id: number) {

    }

    async deleteShelterService(id: number) {

    }
}