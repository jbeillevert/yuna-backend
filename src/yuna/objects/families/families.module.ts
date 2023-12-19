import { Module } from '@nestjs/common';
import { FamiliesController } from './families.controller';
import { FamiliesService } from './families.service';
import { FamiliesQueries } from './familiesQueries';

@Module({
  controllers: [FamiliesController],
  providers: [FamiliesService, FamiliesQueries]
})
export class FamiliesModule {}
