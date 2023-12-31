import { Module } from '@nestjs/common';
import { AuthModule } from './tools/auth/auth.module'
import { CatfactModule } from './yuna/catFacts/catfact.module'
import { FamiliesModule } from './yuna/objects/families/families.module'

@Module({
  imports: [CatfactModule, AuthModule, FamiliesModule],
  providers: [],
})
export class AppModule {}
