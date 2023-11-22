import { Module } from '@nestjs/common';
import { ShelterModule } from './yuna/objects/shelters/shelter.module';

@Module({
  imports: [ShelterModule],
  providers: [],
})
export class AppModule {}
