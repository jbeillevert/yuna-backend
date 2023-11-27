import { Injectable, NotFoundException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { ShelterQueries } from './shelterQueries';
import { ShelterModel } from './shelter.model';


@Injectable() 
export class ShelterService {
    constructor(private readonly shelterQueries: ShelterQueries) {}

    public shelterList: ShelterModel[] = []

    async createShelterService(name: string, adress: string, cityID: number) {
        try {
            return await this.shelterQueries.createShelterQuery(name, adress, cityID)
        } catch (error) {
            throw new BadRequestException(error.message)
        }
        
    }

    async updateShelterService(id: string, name: string, adress: string, cityID: number) {
        try {
            return await this.shelterQueries.updateShelterQuery(id, name, adress, cityID)
        } catch (error) {
            throw new BadRequestException(error.message)
        }
    }

    async getAllShelterService() {
        try {
            return await this.shelterQueries.getAllShelterQuery()
        } catch (error) {
            throw new BadRequestException(error.message)
        }

    }

    async getOneShelterService(id: string) {
        try {
            return await this.shelterQueries.getOneShelterQuery(id)
        } catch (error) {
            throw new BadRequestException(error.message)
        }

    }

    async deleteShelterService(id: string) {
        try {
            return await this.shelterQueries.deleteShelterQuery(id)
        } catch (error) {
            throw new BadRequestException(error.message)
        }
    }
}