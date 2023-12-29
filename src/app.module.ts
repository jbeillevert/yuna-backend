import { Module } from '@nestjs/common';
import { ShelterModule } from './yuna/objects/shelters/shelter.module';
import { AuthModule } from './tools/auth/auth.module'
import { CatfactModule } from './yuna/catFacts/catfact.module'

@Module({
  imports: [ShelterModule, AuthModule, CatfactModule],
  providers: [],
})
export class AppModule {}
