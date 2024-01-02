import { Module } from '@nestjs/common';
import { AuthModule } from './tools/auth/auth.module'
import { CatfactModule } from './catFacts/catfact.module'
import { FamiliesModule } from './yuna/families/families.module'

@Module({
  imports: [CatfactModule, AuthModule, FamiliesModule],
  providers: [],
})
export class AppModule {}
