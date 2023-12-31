import { Injectable, NotFoundException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { FamiliesQueries } from './familiesQueries';
import { FamiliesModel } from './families.model';


@Injectable() 
export class FamiliesService {
    constructor(private readonly FamiliesQueries: FamiliesQueries) {}

    public FamiliesList: FamiliesModel[] = []

    async createFamiliesService(lastname: string, firstname: string, adress: string, phone: string, city: string) {
        try {
            return await this.FamiliesQueries.createFamilyQuery(lastname, firstname, adress, phone, city)
        } catch (error) {
            throw new BadRequestException(error.message)
        }
        
    }

    async updateFamiliesService(id:number, lastname: string, firstname: string, adress: string, phone: string, city: string) {
        try {
            return await this.FamiliesQueries.updateFamiliesQuery(id, lastname, firstname, adress, phone, city)
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

    async getOneFamiliesService(id: number) {
        try {
            return await this.FamiliesQueries.getOneFamilyQuery(id)
        } catch (error) {
            throw new BadRequestException(error.message)
        }

    }

    async deleteFamiliesService(id: number) {
        try {
            return await this.FamiliesQueries.deleteFamiliesQuery(id)
        } catch (error) {
            throw new BadRequestException(error.message)
        }
    }
}