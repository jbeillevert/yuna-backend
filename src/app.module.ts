import { Module } from '@nestjs/common';
import { BancoModule } from './banco/banco.module';
import { AuthModule } from './tools/auth/auth.module';

@Module({
  imports: [BancoModule, AuthModule],
  providers: [],
})
export class AppModule {}
