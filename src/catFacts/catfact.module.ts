import { Module } from '@nestjs/common';
import { CatfactController } from './catfact.controller';
import { CatfactService } from './catfact.service';

@Module({
  controllers: [CatfactController],
  providers: [CatfactService]
})
export class CatfactModule {}
