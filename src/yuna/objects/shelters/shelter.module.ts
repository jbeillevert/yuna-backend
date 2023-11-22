import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import { ShelterService } from './shelter.service';
import { ShelterQueries } from './shelterQueries';

@Module({
  controllers: [ShelterController],
  providers: [ShelterService, ShelterQueries]
})
export class ShelterModule {}
