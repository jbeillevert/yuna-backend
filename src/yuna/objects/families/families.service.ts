import { Injectable, NotFoundException, BadRequestException, ForbiddenException } from '@nestjs/common';

import { City } from 'src/yuna/infos/cities/city.model';
import { FamiliesQueries } from './familiesQueries';
import { FamiliesModel } from './families.model';


@Injectable() 
export class FamiliesService {
    constructor(private readonly FamiliesQueries: FamiliesQueries) {}

    public FamiliesList: FamiliesModel[] = []

    async createFamiliesService(lastname: string, firstname: string, adress: string, phone: string, cityId: number) {
        try {
            return await this.FamiliesQueries.createFamilyQuery(lastname, firstname, adress, phone, cityId)
        } catch (error) {
            throw new BadRequestException(error.message)
        }
        
    }

    async updateFamiliesService(id:string, lastname: string, firstname: string, adress: string, phone: string, cityId: number) {
        try {
            return await this.FamiliesQueries.updateFamiliesQuery(id, lastname, firstname, adress, phone, cityId)
        } catch (error) {
            throw new BadRequestException(error.message)
        }
    }

    async getAllFamiliesService() {
        try {
            return await this.FamiliesQueries.getAllFamiliesQuery()
        } catch (error) {
            throw new BadRequestException(error.message)
        }

    }

    async getOneFamiliesService(id: string) {
        try {
            return await this.FamiliesQueries.getOneFamilyQuery(id)
        } catch (error) {
            throw new BadRequestException(error.message)
        }

    }

    async deleteFamiliesService(id: string) {
        try {
            return await this.FamiliesQueries.deleteFamiliesQuery(id)
        } catch (error) {
            throw new BadRequestException(error.message)
        }
    }
}