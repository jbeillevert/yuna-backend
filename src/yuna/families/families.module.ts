import { Module } from '@nestjs/common';
import { FamiliesController } from './families.controller';
import { FamiliesService } from './families.service';
import { FamiliesQueries } from './familiesQueries';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }), 
  ],
  controllers: [FamiliesController],
  providers: [FamiliesService, FamiliesQueries]
})
export class FamiliesModule {}
