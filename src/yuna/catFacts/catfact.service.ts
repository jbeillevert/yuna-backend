import { Injectable } from '@nestjs/common';
import { error } from 'console';


@Injectable() 
export class CatfactService {

    async getCatfactService() {
        const url = 'https://catfact.ninja/fact'
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data; 
        } catch (error) {
            console.error('Error : ', error);
            throw error;
        }
    }

}